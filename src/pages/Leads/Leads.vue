<template>
  <div>
    <PageHead :title="cliente?.nome ?? 'Carregando'"/>
    <router-link to="/" class="text-zinc-700 text-xs">Voltar</router-link>

    <Loading v-if="loading"/>
    <p v-if="!loading && cliente && !Object.keys(cliente).length">Nenhum registro encontrado</p>
    <div v-if="cliente" class="my-10 grid grid-cols-4 gap-4">
      <div v-for="item in cliente.lead_log" :key="item.id" class="p-4 shadow-md rounded-md bg-white">
        <div>
          <span class="text-xs text-zinc-500">Produto</span>
          <h3>{{item.lead.produto.nome}}</h3>
        </div>
        <div>
          <span class="text-xs text-zinc-500">Vendedor(a)</span>
          <h3>{{item.lead.vendedor.name}}</h3>
        </div>
        <div>
          <span class="text-xs text-zinc-500">valor</span>
          <h3>{{item.lead.valorRecebido ?? item.lead.valor ?? '---'}}</h3>
        </div>
        <div>
          <span class="text-xs text-zinc-500">Status</span>
          <h3 v-html="statusLead(item.lead.status)" class="font-bold"></h3>
        </div>
        <div>
          <span class="text-xs text-zinc-500">Plataforma</span>
          <h3>{{item.lead.meioPagamento ?? '---'}}</h3>
        </div>
        <div>
          <span class="text-xs text-zinc-500">Forma de Pagamento</span>
          <h3>{{item.lead.formaPagamento ?? '---'}}</h3>
        </div>
        <div>
          <span class="text-xs text-zinc-500">Status do Pagamento</span>
          <h3>{{item.lead.statusPagamento}}</h3>
        </div>
        <div>
          <span class="text-xs text-zinc-500">Lead iniciado em</span>
          <h3>{{item.lead.data_inicio ?? '---'}}</h3>
        </div>
        <div>
          <span class="text-xs text-zinc-500">Lead finalizado em</span>
          <h3>{{item.lead.data_finalizada ?? "---"}}</h3>
        </div>
        <div class="my-4 w-full">
          <a target="_blank" :href="`https://app.hotbillet.com.br/leads/${item.id}`" class="text-xs bg-zinc-700 text-white px-4 py-2 rounded-full w-full">Acessar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHead from '@/components/PageHead.vue';
import TextField from '@/components/UI/Form/TextField/TextField.vue';
import { onMounted, ref, watch } from 'vue';
import { http } from '@/services';
import Loading from '@/components/UI/Loading/Loading.vue';
import {LeadProduct} from '@/interfaces/ILead'
import Button from '@/components/UI/Button/Button.vue';
const loading = ref(false)
const cliente = ref<LeadProduct>()

const props = defineProps({
  id: {
    type: [String,Number],
    required:true
  }
})

const fetchLeads = async () => {
  try {
    loading.value = true;
    const {data} = await http.get<LeadProduct>(`/clientes/${props.id}/leads`)
    cliente.value = data;
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

const statusLead = (status:string) => {
  const statusDesc: {[key: number]: string} = {
    1: '<span class="text-blue-500">Em negociação</span>',
    2: "Comprometido",
    3: "Convertido",
    4: "Comprovante Recebido",
    5: "Bloqueado/Devolvido",
    6: "Follow-UP",
    7: '<span class="text-green-500">Finalizado</span>',
    8: '<span class="text-orange-500">Aguardando Contato</span>',
    9: '<span class="text-red-500">Cancelado</span>',
    11: "Sem Contato"
  }

  // @ts-ignore
  return statusDesc.hasOwnProperty(status) ? statusDesc[status] : "Não identificado"
}

onMounted(() => fetchLeads())

</script>

<style scoped>

</style>