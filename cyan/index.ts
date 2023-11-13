import {StartTemplateWithLambda} from "@atomicloud/cyan-sdk";

StartTemplateWithLambda(async (i, d) => {
  return {
    processors: [
      {
        name: "kirinnee/dotnet-handlbar",
        files: [],
        config: {},
      },  
    ],
    plugins: [

    ],
  }
});
