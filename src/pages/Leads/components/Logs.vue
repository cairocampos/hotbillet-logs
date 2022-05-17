<template>
  <Sidebar
    ref="sidebar"
    @on-close="$emit('update:modelValue', {})"
  >
    <template #body>
      <p v-if="!modelValue.logs.length">
        Nenhum Registro de logs
      </p>
      <div class="space-y-4">
        <div v-for="log in modelValue.logs" :key="log.id" class="cursor-pointer hover:bg-zinc-100 p-2 rounded-sm transition-all" @click="redirect(log.lead_id)">
          <div>
            <span class="text-xs text-zinc-500">Número do Lead</span>
            <h3 class="text-zinc-700">{{log.lead_id}}</h3>
          </div>
          <div>
            <span class="text-xs text-zinc-500">Número do Cliente</span>
            <h3 class="text-zinc-700">{{log.lead_id}}</h3>
          </div>
          <div>
            <span class="text-xs text-zinc-500">Data de criação</span>
            <h3 class="text-zinc-700">{{dateFormat(log.created_at)}}</h3>
          </div>
          <div>
            <span class="text-xs text-zinc-500">Status do Lead</span>
            <h3 v-html="statusLead(modelValue.status)" class="font-bold"></h3>
          </div>
        </div>
      </div>
    </template>
  </Sidebar>
</template>

<script lang='ts'>
import { defineComponent, onMounted, PropType, ref, toRefs, watch } from 'vue';
import Sidebar from '@/components/UI/Sidebar/Sidebar.vue';
import { Lead } from '@/interfaces/ILead';
export default defineComponent({
  components: { Sidebar },
  props: {
    modelValue: {
      type: Object as PropType<Lead>,
      required:true
    }
  },
  emits: ['update:modelValue', 'on-filtered'],
  setup(props, {emit}) {
    const sidebar = ref<typeof Sidebar>();
    const { modelValue } = toRefs(props)
    
    watch(modelValue, val => {
      if(val && Object.keys(val).length) sidebar.value?.toggle()
    })

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

    const dateFormat = (date:string) => new Date(date).toLocaleString()

    const redirect = (id: number) => {
      window.open(`https://app.hotbillet.com.br/leads/${id}`, '_blank')
    }

    onMounted(() => sidebar.value?.toggle())

    return {
      sidebar,
      statusLead,
      dateFormat,
      redirect
    }
  }
})
</script>

<style lang='scss' scoped>
</style>