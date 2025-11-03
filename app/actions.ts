/*"use server"

import nodemailer from "nodemailer"

export async function sendContactEmail(formData: FormData) {
  const nom = formData.get("nom")?.toString() || ""
  const email = formData.get("email")?.toString() || ""
  const telephone = formData.get("telephone")?.toString() || ""
  const typeProjet = formData.get("typeProjet")?.toString() || ""
  const budget = formData.get("budget")?.toString() || ""
  const description = formData.get("description")?.toString() || ""

  // Validation
  if (!nom || !email || !telephone || !typeProjet || !description) {
    return {
      success: false,
      message: "Tous les champs requis doivent être remplis",
    }
  }

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return {
      success: false,
      message: "Format d'email invalide",
    }
  }

  try {
    // Create transporter with OVH SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Send email to your company
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "info@linaconstructions.com",
      replyTo: email,
      subject: "Nouvelle demande de devis - Lina Constructions",
      text: `
==============================================
NOUVELLE DEMANDE DE DEVIS
Lina Constructions
==============================================

INFORMATIONS CLIENT
-------------------
Nom : ${nom}
Email : ${email}
Téléphone : ${telephone}
Type de projet : ${typeProjet}
Budget : ${budget}

DESCRIPTION DU PROJET
---------------------
${description}

==============================================
Date de réception : ${new Date().toLocaleString("fr-TN")}
==============================================
      `,
      html: `
<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2>Nouvelle demande de devis</h2>
    <hr />
    
    <h3>Informations Client</h3>
    <p><strong>Nom :</strong> ${nom}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Téléphone :</strong> ${telephone}</p>
    <p><strong>Type de projet :</strong> ${typeProjet}</p>
    <p><strong>Budget :</strong> ${budget}</p>
    
    <h3>Description du projet</h3>
    <p>${description.replace(/\n/g, "<br>")}</p>
    
    <hr />
    <p><em>Date de réception : ${new Date().toLocaleString("fr-TN")}</em></p>
  </body>
</html>
      `,
    })

    // Optional: Send confirmation email to client
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Confirmation de votre demande - Lina Constructions",
      text: `Bonjour ${nom},

Nous avons bien reçu votre demande de devis. Notre équipe examinera votre projet et vous contactera dans les plus brefs délais.

Cordialement,
Lina Constructions`,
      html: `
<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <p>Bonjour ${nom},</p>
    <p>Nous avons bien reçu votre demande de devis. Notre équipe examinera votre projet et vous contactera dans les plus brefs délais.</p>
    <p>Cordialement,<br>Lina Constructions</p>
  </body>
</html>
      `,
    })

    return {
      success: true,
      message: "Votre demande a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.",
    }
  } catch (error) {
    console.error("Email error:", error)
    return {
      success: false,
      message:
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement.",
    }
  }
}
*/