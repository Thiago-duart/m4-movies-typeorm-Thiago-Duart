import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Movie {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 50, unique: true, nullable: false })
  name: string;
  @Column({ type: "text", nullable: true })
  description: string;
  @Column({ nullable: false })
  duration: number;
  @Column({ nullable: false })
  price: number;
}

export default Movie;
