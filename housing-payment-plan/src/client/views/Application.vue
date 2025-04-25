<template>
  <div class="container">
    <div class="content" id="pdfContent">
      <div class="pageHeader">
        <p class="mainHeader">KENNEWSAW STATE UNIVERSITY</p>
        <p class="subHeader">Housing Payment Plan</p>
        <span class="subSubHeader">Promissory Note</span>
      </div>
      <div class="letter-header">
        <div class="row">
          <div class="left">
            <div class="field">
              <span class="label">Student Name:</span>
              <span class="value">{{ studentName }}</span>
            </div>
          </div>
          <div class="right">
            <div class="field">
              <span class="label">Dated:</span>
              <span class="value">{{ todayDate }}</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="left">
            <div class="field">
              <span class="label">Student Address:</span>
              <span class="value">{{ studentAddress }}</span>
            </div>
          </div>
          <div class="right">
            <div class="field">
              <span class="label">KSU#:</span>
              <span class="value">{{ studentKSUId }}</span>
            </div>
          </div>
        </div>

        <div class="school">
          <div>
            <span class="label">School:</span>
            <div class="value" style="display: inline-grid;">
              <span>Kennesaw State University</span>
              <span>585 Cobb Ave</span>
              <span>Suite 1330, MD 0105</span>
              <span>Kennesaw, GA 30144</span>
              <span>Phone: 470-578-6419</span>
              <span>Email: paymentplan@kennesaw.edu</span>
            </div>
          </div>
        </div>
      </div>
      <div class="plan">
        <p>Below are the payment details of your Housing Payment Plan for <span style="font-weight: bold;">[Semester Year]</span>:</p>
        <table>
          <thead>
            <tr>
              <th class="tableHeader">Installment</th>
              <th class="tableHeader">Amount Due</th>
              <th class="tableHeader">Fall Semester Due Dates </th>
            </tr>
          </thead>
          <tbody>
            
            <tr v-for="[key, value] in installmentsArray" :key="key">
              <td class="tableData">{{ key }}</td>
              <td class="tableData">{{ value.amountDue }}</td>
              <td class="tableData">{{ value.fallSemester }}</td>
            </tr>
          </tbody>
        </table>
        <div class="termsAndConditions">
          <p style="font-weight: bold;">Terms and Conditions:</p>
          <p>I agree to make a minimum payment of <span style="font-weight: bold;">[$Amount]</span> to Kennesaw State University.  The remaining payments are due by the 5th of each month and will continue until the entire balance is paid in full.</p>
          <ul>
            <li v-for="item in termsAndConditionsArray">{{item}}</li>
          </ul>
        </div>
        <div class="promiseToPay">
          <p style="font-weight: bold;">Promise to Pay</p>
          <ul>
            <li>
              I, the undersigned party, agree to the payment schedule, as outlined in the lease agreement with Kennesaw State University Housing, to satisfy my total balance of <span style="font-weight: bold;">[$TotalAmount]</span> for <span style="font-weight: bold;">[Semester Year]</span>.
            </li>
            </ul>
        </div>
      </div>

      <p style="font-weight: bold;">By checking this box (signing/entering/typing) my name, I certify that I have read, understand, and agree to the terms of and conditions of this Note.</p>

      <div class="contact-grid">
        <div><label for="name"><strong>Name:</strong></label></div>
        <div><input id="name" v-model="name"/></div>
        <div><label><strong>Date :</strong></label></div>
        <div><input type="text" readonly v-model="todayDate"/></div>
      </div>

      <div class="buttons">
        <button :disabled="!name" class="continue" @click="generatePDF">Submit</button>
        <button class="continue" @click="goToDashboard">Continue</button>
        <button class="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
// @ts-ignore
import html2pdf from 'html2pdf.js'
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const studentName = ref('[Student Name]')
const studentAddress = ref('[Student Mailing Address]')
const studentKSUId = ref('[Student KSU ID]')
const todayDate = ref(new Date().toLocaleDateString())
const name = ref();

  const listOfInstallments = new Map<string, { amountDue: string; fallSemester: string }>();
  const termsAndConditionsArray: string[] = [];
  getListOfInstallmentsAvailable();
  getTermsAndConditions();
  function goToDashboard() {
    router.push('/dashboard');
  }

  function getListOfInstallmentsAvailable() {
    listOfInstallments.set('First Installment', { amountDue: '$369.03', fallSemester: 'September 5th'});
    listOfInstallments.set('Second Installment', { amountDue: '$369.03', fallSemester: 'October 5th'});
    listOfInstallments.set('Third Installment', { amountDue: '$369.03', fallSemester: 'November 5th'});
    console.log(listOfInstallments);
  }

  function getTermsAndConditions() {
    termsAndConditionsArray.push(
      'Once enrolled in the plan, any additional charges or reductions to your financial aid on your student account must be paid before the next installment due date. These charges may include parking permits/citations, dining charges, housing miscellaneous charges, bookstore charges, tuition and fees, and graduation petitions. Your account balance should only show your remaining housing installments on the due dates.',
      'Any outstanding balance from previous terms must be paid in full. Payments will be applied to the oldest balance first, which may require additional payments to stay current on your payment plan.',
      'Any approved Financial Aid not yet paid out on your student account will be considered towards the balance.',
      'A $25 late fee per occurrence and/or hold may be applied to your account for any rent not paid by your plan due dates.',
      'Withdrawing from courses or the University will not reduce or cancel your outstanding balance. Additional fees may apply.',
      'I will inform Kennesaw State University of any change to my name, address, telephone number, or Social Security Number (SSN).',
      'I understand that any Financial Aid that comes through the Institution will be sent to my student account to satisfy this agreement and any other balance.',
      'I understand that if I fail to pay the Housing Fees by the established deadlines, the University may cancel this agreement, remove me from Residence Life, cancel my enrollment in the University, withhold my academic records, and pursue any other legal or equitable remedies.',
      'Kennesaw State University reserves the right to use a collection agency and pursue legal action to collect any unpaid debt. If your account is placed in collections, you will be responsible for all collection fees, which may be up to 15% of the total amount owed, in addition to the original debt. Once your account is in collections, all payments and communications must go through the collection agency.',
      'By signing this document, I certify that I am 18 years of age or older.'
    );
    console.log(listOfInstallments);
  }

  const installmentsArray = computed(() => Array.from(listOfInstallments.entries()));

  function generatePDF() {
    console.log('Entered into the function');
    const element = document.getElementById('pdfContent')
    html2pdf()
      .from(element)
      .set({
        margin: 0.5,
        filename: `${name.value}_Promissory_Note_${todayDate.value}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      })
      .save()
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

.subHeader {
  color: #4a6fa5;
  text-align: center;
  margin: 0px;
}

.subSubHeader {
  text-align: center;
}

.letter-header {
  font-family: Arial, sans-serif;
  width: 100%;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.left, .right {
  flex: 1;
}

.right {
  text-align: right;
}

.field {
  display: flex;
  gap: 5px;
}

.label {
  font-weight: bold;
  min-width: 130px; /* adjust width for perfect spacing */
  display: inline-block;
}

.value {
  display: inline-block;
}

.school {
  margin-top: 20px;
}

.congrats {
  font-weight: bold;
  margin-top: 1rem;
}

.tableHeader, .tableData { 
   text-align: center;
}

.description {
  margin-bottom: 1rem;
}

.termsAndConditions h3 {
  margin-bottom: 0.5rem;
  color: #333;
}

.termsAndConditions li {
  padding-bottom: 5px;
}

.plan {
  margin-top: 1.5rem;
}

.contact-grid {
    display: grid;
    grid-template-columns: max-content 1fr;
    row-gap: 0.75rem;
    column-gap: 1rem;
    align-items: center;
  }
  .contact-grid input {
    padding: 0.4rem;
    border: 1px solid #ccc;
    border-radius: 4px;
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

/* .subHeader {
    text-decoration: underline;
    font-weight: bold;
} */

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
  