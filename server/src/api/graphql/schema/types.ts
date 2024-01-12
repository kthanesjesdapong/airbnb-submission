import builder from "./builder";
import { DateTimeResolver } from "graphql-scalars";

builder.addScalarType('Date', DateTimeResolver);
