import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Phone } from "lucide-react";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Por favor, insira um e-mail válido'),
  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, ''))
    .refine((val) => val.length === 11, {
      message: 'Por favor, insira um telefone válido'
    }),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres')
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const [phoneValue, setPhoneValue] = useState("");

  function formatPhone(value: string) {
    // Remove tudo que não for número
    value = value.replace(/\D/g, "");
    // Aplica a máscara (00) 9 8765-4321
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{1}) (\d{4})(\d)/, "$1 $2-$3");
    value = value.replace(/(\d{4})-(\d{5})/, "$1-$2");
    value = value.replace(/(-\d{4})\d+?$/, "$1");
    return value;
  }

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section className="py-20 bg-linear-to-r/oklab from-basecolor to-basecolor-second">

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-primary-font text-white">Fale conosco</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 font-primary-font text-indigo-50">Entre em contato</h3>
            <p className="text-gray-300 mb-6 font-secondary-font">
              Tem dúvidas sobre nossos produtos ou serviços? Preencha o formulário e entraremos em contato o mais breve possível.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-indigo-500 mr-4 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-medium text-indigo-500">Email</p>
                  <p className="text-indigo-200">contact@allchatbusiness.com.br</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-indigo-500 mr-4 mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-medium text-indigo-500">Telefone</p>
                  <p className="text-indigo-200">(44) 3220-2120</p>
                </div>
              </div>
            </div>
          </div>



          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 md:mx-24 lg:mx-0 rounded-lg shadow-sm font-secondary-font">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-indigo-700 mb-1">
                Nome
              </label>
              <input
                id="name"
                type="text"
                className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-700'}`}
                {...register('name')}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-indigo-700 mb-1">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-700'}`}
                {...register('email')}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-indigo-700 mb-1">
                Telefone
              </label>
              <input
                id="phone"
                type="tel"
                className={`w-full px-3 py-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-700'}`}
                {...register('phone')}
                value={phoneValue}
                onChange={e => {
                  const formatted = formatPhone(e.target.value);
                  setPhoneValue(formatted);
                }}
                maxLength={16}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-indigo-700 mb-1">
                Menssagem
              </label>
              <textarea
                id="message"
                rows={4}
                className={`w-full px-3 py-2 border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-700'}`}
                {...register('message')}
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
            >
              Enviar Menssagem
            </button>
          </form>


        </div>
      </div>
    </section>
  );
}
