"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const factory_1 = require("./logger/factory");
async function start() {
    const PORT = process.env.PORT;
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule, { logger: (0, factory_1.LoggerFactory)("Yelp") });
        app.setGlobalPrefix('api');
        app.use(cookieParser());
        app.useGlobalPipes(new common_1.ValidationPipe());
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Yelp project')
            .setDescription('Mini project for locations of services finding')
            .setVersion('1.0')
            .addTag(`
          NodeJS, Validation, Postgres, JWT, SMS, Mailer, Swagger, Sequelizer, NestJS
      `)
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api/docs', app, document);
        await app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.log(error.message);
    }
}
start();
//# sourceMappingURL=main.js.map