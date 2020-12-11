/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from "class-validator";
  import { User } from "../../../entities/User";
  
  @ValidatorConstraint({ async: true })
  export class EmailExistsConstrain implements ValidatorConstraintInterface {
    validate(email: string): Promise<boolean> {
      return User.findOne({ where: { email } }).then((user) => {
        if (user) return true;
        return false;
      });
    }
  }
  
  export function UserDoesntExists(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        constraints: [],
        options: validationOptions,
        validator: EmailExistsConstrain,
      });
    };
  }