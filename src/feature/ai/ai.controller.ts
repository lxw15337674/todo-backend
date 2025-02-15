import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
    constructor(private readonly aiService: AiService) { }

    @Post('chat')
    async chat(@Body() body: { prompt: string; model?: string }) {
        return this.aiService.generateResponse(body.prompt, body.model);
    }

    @Post('google-chat')
    async googleChat(@Body() body: { prompt: string }) {
        return this.aiService.genGoogleResponse(body.prompt);
    }

    @Get('page-content')
    async getPageContent(@Query('url') url: string) {
        return this.aiService.getPageContent(url);
    }

    @Get('getFutuStockMap')
    async getFutuStockMap(@Query('area') area: string, @Query('mapType') mapType: string) {
        return this.aiService.getFutuStockMap(area, mapType);
    }
    @Get('getYuntuStockMap')
    async getYuntuStockMap() {
        return this.aiService.getYuntuStockMap();
    }
}