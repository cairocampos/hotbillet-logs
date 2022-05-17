<template>
  <div>
    <PageHead :title="$route.meta.title"/>

    <div class="my-10">
      <TextField
        v-model="customerSearch"
        variant="secondary"
        placeholder="Pesquise por nome, telefone ou documento do lead"
        @enter="fetchCustomers"
      >
        <template #left>
          <Loading v-if="loading" />
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </template>
      </TextField>
    </div>

    <Datatable
      :headers="headers"
      :items="customers"
    >
      <template #actions="{ item }">
        <Button
        :redirect="`/clientes/${item.id}/leads`"
        size="xs">Exibir Dados</Button>
      </template>
    </Datatable>
  </div>
</template>

<script setup lang="ts">
import PageHead from '@/components/PageHead.vue';
import TextField from '@/components/UI/Form/TextField/TextField.vue';
import { ref, watch } from 'vue';
import { http } from '@/services';
import Loading from '@/components/UI/Loading/Loading.vue';
import Datatable from '@/components/UI/Datatable/Datatable.vue';
import Button from '@/components/UI/Button/Button.vue';

const loading = ref(false)
const customerSearch = ref("")
const customers = ref([])

const fetchCustomers = async () => {
  try {
    loading.value = true;
    const {data} = await http.get(`/clientes`, {
      params: {
        search: customerSearch.value
      }
    })

    customers.value = data;
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}


const headers = [
  {
    text: "#",
    value: "id"
  },
  {
    text: "Nome",
    value:"nome"
  },
  {
    text: "Email",
    value: "email"
  },
  {
    text: "Telefone 01",
    value: "telefone_01"
  },
  {
    text: "Telefone 02",
    value: "telefone_02"
  },
  {
    text: "Documento",
    value: "cnpj_cpf"
  },
  {
    text: "",
    value: "actions"
  }
];

</script>

<style scoped>

</style>