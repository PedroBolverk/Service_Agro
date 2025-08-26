import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AtribuicoesServicosService } from './atribuicoes-servicos.service';
import { CreateAtribuicoesServicoDto } from './dto/create-atribuicoes-servico.dto';
import { UpdateAtribuicoesServicoDto } from './dto/update-atribuicoes-servico.dto';

@Controller('atribuicoes-servicos')
export class AtribuicoesServicosController {
  constructor(private readonly atribuicoesServicosService: AtribuicoesServicosService) {}

  @Post()
  create(@Body() createAtribuicoesServicoDto: CreateAtribuicoesServicoDto) {
    return this.atribuicoesServicosService.create(createAtribuicoesServicoDto);
  }

  @Get()
  findAll() {
    return this.atribuicoesServicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atribuicoesServicosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAtribuicoesServicoDto: UpdateAtribuicoesServicoDto) {
    return this.atribuicoesServicosService.update(+id, updateAtribuicoesServicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atribuicoesServicosService.remove(+id);
  }
}
