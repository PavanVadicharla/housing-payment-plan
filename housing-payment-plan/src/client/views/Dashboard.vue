<template>
  <div class="pageHeader">
        <p class="mainHeader">Previously Signed Payment Plans</p>
      </div>
    <table>
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2 text-left">#</th>
          <th class="px-4 py-2 text-left">Signed Plan</th>
          <th class="px-4 py-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pdf, index) in proposals" :key="pdf.name" class="border-t">
          <td class="px-4 py-2">{{ index + 1 }}</td>
          <td class="px-4 py-2">{{ pdf.name }}</td>
          <td class="px-4 py-2">
            <p>Download</p>
            <!-- <a :href="pdf.url" download class="text-blue-600 hover:underline">Download</a> -->
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const proposals = ref([])
  const loading = ref(true)
  
  onMounted(async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
  
    const res = await fetch('/mock/previousSignings.json')
    const data = await res.json()
    proposals.value = data.previousSignings
    loading.value = false
  })
  </script>
  <style scoped>
    .pageHeader {
      background: #d6eaf8;
      color: #4a6fa5;
      text-align: center;
      font-weight: bold;
    }

    .mainHeader {
      font-size: large;
      color: #4a6fa5;
      text-align: center;
      margin: 0px 0px 5px 0px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }
    th, td {
      text-align: left;
      padding: 0.75rem;
      border: 1px solid #ccc;
    }

    th {
      background-color: #e8f1f9;
      color: #003c66;
    }
    .tableHeader, .tableData { 
      text-align: center;
    }
  </style>
  