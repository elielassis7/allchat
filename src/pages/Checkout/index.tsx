import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import * as z from "zod";

interface CheckoutSchema {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  personType: "pf" | "pj";
  document: string;
  paymentMethod: "boleto" | "card";
}

const checkoutSchema = z.object({
  firstName: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  lastName: z.string().min(2, "O sobrenome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Por favor, insira um e-mail válido"),
  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .refine((v) => v.length >= 10 && v.length <= 11, {
      message: "Por favor, insira um telefone válido (10-11 dígitos)",
    }),
  cep: z
    .string()
    .transform((v) => v.replace(/\D/g, ""))
    .refine((v) => v.length === 8, { message: "CEP inválido" }),
  street: z.string().min(1, "Rua obrigatória"),
  number: z.string().min(1, "Número é obrigatório"),
  neighborhood: z.string().min(1, "Bairro obrigatório"),
  city: z.string().min(1, "Cidade obrigatória"),
  state: z.string().min(1, "Estado obrigatório"),
  country: z.string().min(1, "País obrigatório"),
  personType: z.enum(["pf", "pj"]),
  document: z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .refine(
      (v, ctx) => {
        const pt = ctx?.parent as CheckoutSchema;
        if (pt.personType === "pf") return v.length === 11;
        return v.length === 14;
      },
      { message: "Documento inválido (CPF 11 / CNPJ 14 dígitos)" }
    ),
  paymentMethod: z.enum(["boleto", "card"]),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

type Product = { name: string; price: number };

export function Checkout({ product }: { product?: Product }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      country: "Brasil",
      personType: "pf",
      paymentMethod: "boleto",
    },
  });

  const [phoneView, setPhoneView] = useState("");
  const watchPersonType = watch("personType");
  const watchPayment = watch("paymentMethod");

  const location = useLocation();
  const locationState = (location.state as { product?: Product } | null) ?? null;

  async function fetchAddressByCep(cepRaw: string) {
    const cep = cepRaw.replace(/\D/g, "");
    if (cep.length !== 8) return;
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();
      if (data.erro) return;
      setValue("street", data.logradouro || "");
      setValue("neighborhood", data.bairro || "");
      setValue("city", data.localidade || "");
      setValue("state", data.uf || "");
      setValue("country", "Brasil");
    } catch (err) {
      console.log(err);
    }
  }

  function formatPhoneInput(v: string) {
    let value = v.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{1}) (\d{4})(\d)/, "$1 $2-$3");
    value = value.replace(/(\d{4})-(\d{5})/, "$1-$2");
    value = value.replace(/(-\d{4})\d+?$/, "$1");
    return value;
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const formatted = formatPhoneInput(e.target.value);
    setPhoneView(formatted);
    setValue("phone", formatted);
  }

  function handleCepBlur(e: React.FocusEvent<HTMLInputElement>) {
    const cep = e.target.value;
    fetchAddressByCep(cep);
  }

  const onSubmit = (data: CheckoutForm) => {
    console.log("payload (document/phone only-digits via zod transform):", data);
    // enviar para backend...
  };

  // fallback caso a página que chama não passe o produto via props
  const productData: Product =
    product ?? locationState?.product ?? { name: "AllChat Business - Plano Expert", price: 849.99 };

  return (
    <section className="py-12 px-4">
      <h1 className="text-indigo-200 text-4xl text-center font-bold font-primary-font pt-7 pb-5">Finalizar compra</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: form */}
        <form
          onSubmit={handleSubmit(() => onSubmit)}
          className="bg-white p-6 rounded-lg shadow-md space-y-4 font-secondary-font"
        >
          <h2 className="text-2xl text-indigo-600 font-semibold font-primary-font">Dados do Comprador</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Nome</label>
              <input
                {...register("firstName")}
                className="w-full mt-1 px-3 py-2 border rounded-xl"
              />
              {errors.firstName && (
                <p className="text-sm text-red-600">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Sobrenome</label>
              <input
                {...register("lastName")}
                className="w-full mt-1 px-3 py-2 border rounded-xl"
              />
              {errors.lastName && (
                <p className="text-sm text-red-600">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">E-mail</label>
            <input {...register("email")} className="w-full mt-1 px-3 py-2 border rounded-xl" />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Telefone</label>
            <input
              value={phoneView}
              onChange={handlePhoneChange}
              inputMode="tel"
              className="w-full mt-1 px-3 py-2 border rounded-xl"
            />
            {errors.phone && (
              <p className="text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">CEP</label>
              <input
                {...register("cep")}
                onBlur={handleCepBlur}
                className="w-full mt-1 px-3 py-2 border rounded-xl"
              />
              {errors.cep && (
                <p className="text-sm text-red-600">{errors.cep.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Número</label>
              <input {...register("number")} className="w-full mt-1 px-3 py-2 border rounded-xl" />
              {errors.number && (
                <p className="text-sm text-red-600">{errors.number.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Rua</label>
            <input {...register("street")} className="w-full mt-1 px-3 py-2 border rounded-xl" />
            {errors.street && (
              <p className="text-sm text-red-600">{errors.street.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Bairro</label>
              <input {...register("neighborhood")} className="w-full mt-1 px-3 py-2 border rounded-xl" />
              {errors.neighborhood && (
                <p className="text-sm text-red-600">{errors.neighborhood.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Cidade</label>
              <input {...register("city")} className="w-full mt-1 px-3 py-2 border rounded-xl" />
              {errors.city && (
                <p className="text-sm text-red-600">{errors.city.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Estado</label>
              <input {...register("state")} className="w-full mt-1 px-3 py-2 border rounded-xl" />
              {errors.state && (
                <p className="text-sm text-red-600">{errors.state.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">País</label>
              <input {...register("country")} className="w-full mt-1 px-3 py-2 border rounded-xl" />
              {errors.country && (
                <p className="text-sm text-red-600">{errors.country.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Tipo de pessoa</label>
              <select {...register("personType")} className="w-full mt-1 px-3 py-2 border rounded-xl">
                <option value="pf">Pessoa Física</option>
                <option value="pj">Pessoa Jurídica</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">{watchPersonType === "pf" ? "CPF" : "CNPJ"}</label>
              <input {...register("document")} className="w-full mt-1 px-3 py-2 border rounded-xl" />
              {errors.document?.message && (
                <p className="text-sm text-red-600">{errors.document.message}</p>
              )}
            </div>
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full bg-emerald-500 text-white py-2 rounded-xl">
              Ir para pagamento
            </button>
          </div>
        </form>

        {/* Right: resumo do produto */}
        <aside className="bg-gray-50 p-6 rounded-lg shadow-md font-secondary-font">
          <h3 className="text-2xl text-indigo-600 font-primary-font font-semibold mb-4">Resumo do Pedido</h3>
          <div className="my-4 flex justify-between items-center">
            <p className="font-semibold text-xl">{productData.name}</p>
            <p className="text-lg font-bold">R$ {productData.price.toFixed(2)}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Pagamento</h3>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input {...register("paymentMethod")} type="radio" value="boleto" />
                Boleto
              </label>
              <label className="flex items-center gap-2">
                <input {...register("paymentMethod")} type="radio" value="card" />
                Cartão de Crédito
              </label>
            </div>
          </div>

          {watchPayment === "card" && (
            <div className="space-y-2">
              <label className="block text-sm font-medium">Número do cartão</label>
              <input className="w-full mt-1 px-3 py-2 border rounded-xl" />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium">Validade</label>
                  <input className="w-full mt-1 px-3 py-2 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium">CVC</label>
                  <input className="w-full mt-1 px-3 py-2 border rounded-xl" />
                </div>
              </div>
            </div>
          )}

          <div className="pt-4">
            <button type="button" className="w-full bg-blue-600 text-white py-2 rounded-xl">
              Finalizar Compra
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">Após finalizar, você será redirecionado para o pagamento.</p>
        </aside>
      </div>
    </section>
  );
}