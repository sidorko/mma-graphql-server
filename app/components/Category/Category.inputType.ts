import { InputType, Field } from 'type-graphql';
import { Length } from 'class-validator';
import { Categories } from './Category.entity';

@InputType()
export class CategoriesInput implements Partial<Categories> {
  @Field()
  name: string;

  @Field()
  @Length(1, 255)
  description: String;
}
