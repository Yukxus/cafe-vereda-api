import { Injectable } from '@nestjs/common';

/**
 * Integraciones de servicios de negocio
 * - Stripe: Pagos
 * - SendGrid: Email
 * - HubSpot: CRM
 */

@Injectable()
export class IntegrationsService {
  // STRIPE PAYMENT INTEGRATION
  // TODO: Instalar @stripe/stripe-js
  // Configurar STRIPE_API_KEY en .env
  async processPayment(amount: number, currency: string, description: string) {
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: Math.round(amount * 100),
    //   currency,
    //   description,
    // });
    // return paymentIntent.client_secret;
    return { status: 'pending', message: 'Stripe integration required' };
  }

  // SENDGRID EMAIL INTEGRATION
  // TODO: Instalar @sendgrid/mail
  // Configurar SENDGRID_API_KEY en .env
  async sendEmail(to: string, subject: string, htmlContent: string) {
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // const msg = {
    //   to,
    //   from: process.env.SENDGRID_FROM_EMAIL,
    //   subject,
    //   html: htmlContent,
    // };
    // await sgMail.send(msg);
    return { status: 'pending', message: 'SendGrid integration required' };
  }

  // HUBSPOT CRM INTEGRATION
  // TODO: Instalar @hubspot/api-client
  // Configurar HUBSPOT_API_KEY en .env
  async createContactInHubSpot(email: string, firstName: string, lastName: string) {
    // const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_API_KEY });
    // const SimplePublicObjectInput = {
    //   properties: [
    //     { name: 'firstname', value: firstName },
    //     { name: 'lastname', value: lastName },
    //     { name: 'email', value: email },
    //   ],
    // };
    // const createContactResponse = await hubspotClient.crm.contacts.basicApi.create(SimplePublicObjectInput);
    // return createContactResponse;
    return { status: 'pending', message: 'HubSpot integration required' };
  }
}
