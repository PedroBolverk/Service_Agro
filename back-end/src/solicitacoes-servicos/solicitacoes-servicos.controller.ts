import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitacoesServicosService } from './solicitacoes-servicos.service';
import { CreateSolicitacoesServicoDto } from './dto/create-solicitacoes-servico.dto';
import { UpdateSolicitacoesServicoDto } from './dto/update-solicitacoes-servico.dto';

@Controller('solicitacoes-servicos')
export class SolicitacoesServicosController {
  constructor(private readonly solicitacoesServicosService: SolicitacoesServicosService) {}

  @Post()
  create(@Body() createSolicitacoesServicoDto: CreateSolicitacoesServicoDto) {
    return this.solicitacoesServicosService.create(createSolicitacoesServicoDto);
  }

  @Get()
  findAll() {
    return this.solicitacoesServicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitacoesServicosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolicitacoesServicoDto: UpdateSolicitacoesServicoDto) {
    return this.solicitacoesServicosService.update(+id, updateSolicitacoesServicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitacoesServicosService.remove(+id);
  }
}
