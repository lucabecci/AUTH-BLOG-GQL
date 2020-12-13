import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { User } from "../../../entities/User";

@ValidatorConstraint({ async: true })
export class EmailCheckConstraint implements ValidatorConstraintInterface {
  validate(email: string): Promise<boolean> {
    return User.findOne({ where: { email } }).then((user) => {
      if (user) return false;
      return true;
    });
  }
}

export function IsEmailAlreadyExist(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: EmailCheckConstraint,
    });
  };
}
