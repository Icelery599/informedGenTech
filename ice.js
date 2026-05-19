// Interactive functionality: payment plan selection alert & message form handling.
  document.addEventListener('DOMContentLoaded', () => {
    // --- PAYMENT PLAN BUTTONS ---
    const planButtons = document.querySelectorAll('.btn-plan');
    planButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const planType = btn.getAttribute('data-plan');
        if (planType === 'free') {
          alert("🎉 You selected the FREE PLAN.\n✓ You will apply for scholarships by yourself.\n✓ Access to all scholarship listings.\n✓ No payment required — good luck superstar!");
        } 
        else if (planType === 'paid_app') {
          alert("💳 Application Boost Plan (requires payment $149).\n✓ We help you through the entire application process (essays, deadlines, document review).\n✓ Visa is not included, but we provide guidance resources.\n\nTo proceed, our team will contact you.");
        } 
        else if (planType === 'paid_full') {
          alert("✈️ Ultimate Success Plan ($349).\n✓ Full application assistance + complete visa processing support.\n✓ From scholarship submission to visa interview prep.\n✓ Our experts handle the heavy work so you can focus on your dreams.");
        } else {
          alert("Please check the plan details. Get in touch via message block for custom support!");
        }
      });
    });

    // --- MESSAGE BLOCK with feedback (space for message) ---
    const messageForm = document.getElementById('messageForm');
    const feedbackDiv = document.getElementById('messageFeedback');

    messageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('msgName');
      const emailInput = document.getElementById('msgEmail');
      const messageInput = document.getElementById('msgContent');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const messageText = messageInput.value.trim();

      if (!name || !email || !messageText) {
        feedbackDiv.innerHTML = '<span style="color:#c2410c;">⚠️ Please fill in all fields (name, email, message) before sending.</span>';
        return;
      }
      if (!email.includes('@') || !email.includes('.')) {
        feedbackDiv.innerHTML = '<span style="color:#c2410c;">📧 Please enter a valid email address.</span>';
        return;
      }

      // simulate message submission success
      feedbackDiv.innerHTML = `<span style="color:#2c7a4a; background:#e6f7ec; padding:0.5rem 1rem; border-radius: 40px; display:inline-block;">✅ Thanks ${name}! Your message has been received. Our scholarship team will reply within 48h.</span>`;
      
      // Optionally clear form or keep for reference? We'll reset only the message area but keep optional
      messageInput.value = '';
      // reset after 5 seconds the feedback (optional)
      setTimeout(() => {
        if (feedbackDiv.innerHTML.includes("Thanks")) {
          feedbackDiv.innerHTML = '';
        }
      }, 5000);
      
      // also log to console for debugging
      console.log(`Message from ${name} (${email}): ${messageText}`);
    });

    // Bonus: small interactive cards hover effect reminder (no extra logic needed, but we add console greeting)
    console.log("✨ Superstars ready! Scholarships & payment plans loaded.");
  });