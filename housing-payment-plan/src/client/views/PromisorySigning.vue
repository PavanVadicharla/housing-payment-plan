  <template>
    <div class="page-wrapper">
      <div class="page-container">
        <div class="page-header">
          PROMISSORY NOTE – Housing<br/>
          FOR BALANCE DUE KENNESAW STATE UNIVERSITY
        </div>
  
        <div class="page-body">
          <div class="info-grid">
            <div><strong>Student Name :</strong></div><div>Walters, Anysha</div>
            <div><strong>Address :</strong></div><div>601 Walden Walk Cir, Stone Mountain, GA 30086‑2773</div>
            <div><strong>School :</strong></div><div>Kennesaw State University<br/>385 Cobb Ave.<br/>Bursar’s Office MD 0503<br/>Kennesaw, GA 30144<br/>470‑578‑6419</div>
            <div><strong>Fax :</strong></div><div>470‑578‑9161</div>
            <div><strong>Dated :</strong></div><div>31‑MAR‑2025</div>
            <div><strong>KSU# :</strong></div><div>001130007</div>
          </div>
  
          <p class="promise">
            <strong>Promise To Pay :</strong> I, the undersigned party, agree to the payment schedule of 3 installments of $369.03 per the lease agreement with KSU Housing to satisfy my total balance of $1,107.10 for Spring Semester 2025 with Kennesaw State University.
          </p>
  
          <section class="terms">
            <h3>Terms and Conditions:</h3>
            <ul>
              <li>I agree to make a minimum monthly payment of $369.03 …</li>
              <li>I understand that failure to pay …</li>
              <li>I understand that any Financial Aid …</li>
              <li>I understand that if I do not pay …</li>
              <li>Kennesaw State University reserves …</li>
            </ul>
          </section>
  
          <div class="certify">
            <input type="checkbox" id="certify" />
            <label for="certify">
              By checking this box, I certify that I have read, understand, and agree to the terms and conditions of this Note. I certify that I am 18 years of age.
            </label>
          </div>
  
          <div class="contact-grid">
            <div><label for="phone"><strong>Name:</strong></label></div>
            <div><input id="phone" type="text" /></div>
            <div><label><strong>Date :</strong></label></div>
            <div><input type="text" readonly value="31‑MAR‑2025" /></div>
          </div>
  
          <div class="actions">
            <button class="btn prev" @click="goBack">Previous</button>
            <button class="btn submit" @click="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
  function goBack() {
    router.back();
  }
  function submit() {
    // handle form submission
    alert('Submitted!');
  }
  </script>
  
  <style scoped>
  .page-wrapper {
    font-family: Arial, sans-serif;
  }
  .page-container {
    max-width: 90%;
    margin: 1.5rem auto;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
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
  .page-body {
    background: #fff;
    padding: 1.5rem;
  }
  .info-grid {
    display: grid;
    grid-template-columns: max-content 1fr;
    row-gap: 0.5rem;
    column-gap: 1rem;
    margin-bottom: 1rem;
  }
  .promise {
    margin: 1rem 0;
    font-size: 0.95rem;
  }
  .terms h3 {
    margin-bottom: 0.5rem;
  }
  .terms ul {
    padding-left: 1.25rem;
    color: #555;
  }
  .certify {
    margin: 1rem 0;
  }
  .certify input {
    margin-right: 0.5rem;
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
  .actions {
    text-align: center;
    margin-top: 1.5rem;
  }
  .btn {
    padding: 0.5rem 1.5rem;
    margin: 0 0.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .prev {
    background: #6c757d;
    color: #fff;
  }
  .submit {
    background: #28a745;
    color: #fff;
  }
  </style>
  