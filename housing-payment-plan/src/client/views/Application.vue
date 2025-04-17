<template>
    <div class="container">
      <div class="content">
        <div class="page-header">
            Housing Payment Plan Application
        </div>
        <p class="congrats">Congratulations,</p>
        <p class="description">
          You are eligible for the University Housing Payment Plan. Please review the guidelines and the proposed
          payment plan below. Click Continue to proceed to the promissory note or Cancel to cancel your request.
        </p>
  
        <div class="guidelines">
          <h3 style="text-decoration: underline;">Guidelines:</h3>
          <ul>
            <li>Any approved Financial Aid ... considered towards the balance.</li>
            <li>A $25 late payment fee ... may result in a hold on the account.</li>
            <li>Missed or rejected payments ... subject to collections.</li>
            <li>Withdrawing from the University ... may incur additional fees.</li>
            <li>KSU reserves the right ... collection agency and pursue litigation.</li>
          </ul>
        </div>
  
        <div class="plan">
  <p class="subHeader">Below are the Proposed Plans based on your housing balance:</p>
  <table>
    <thead>
      <tr>
        <th>Installment</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>First Installment</td>
        <td>$369.03</td>
      </tr>
      <tr>
        <td>Second Installment</td>
        <td>$369.03</td>
      </tr>
      <tr>
        <td>Third Installment</td>
        <td>$369.03</td>
      </tr>
    </tbody>
  </table>
</div>

  
        <div class="buttons">
          <button class="continue" @click="goToPromisorySigningPage">Continue</button>
          <button class="cancel">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Header from '../components/Header.vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  function goToPromisorySigningPage() {
    router.push('/promisory-signing');
  }
  function submit() {
    // handle form submission
    alert('Submitted!');
  }
  </script>

<style scoped>
.container {
  max-width: 90%;
  margin: auto;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  font-family: Arial, sans-serif;
}

.content h2 {
  text-align: center;
  color: #004c7d;
}

.page-header {
    background: #d6eaf8;
    color: #4a6fa5;
    text-align: center;
    padding: 0.75rem;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.4;
}
.congrats {
  font-weight: bold;
  margin-top: 1rem;
}

.description {
  margin-bottom: 1rem;
}

.guidelines h3 {
  margin-bottom: 0.5rem;
  color: #333;
}

.guidelines ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  color: #555;
}

.plan {
  margin-top: 1.5rem;
}

.plan-item {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
}

.plan-item input {
  text-align: right;
  padding: 0.2rem 0.5rem;
  border: 1px solid #ccc;
  width: 150px;
  border-radius: 4px;
}

.subHeader {
    text-decoration: underline;
    font-weight: bold;
}

.buttons {
  margin-top: 2rem;
  text-align: center;
}

button {
  padding: 0.5rem 1.5rem;
  margin: 0 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.continue {
  background-color: #007bff;
  color: white;
}

.cancel {
  background-color: #ccc;
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

</style>
  