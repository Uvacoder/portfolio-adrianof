<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div id="faq" class="bg-gray-100">
    <div class="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl divide-y-2 divide-gray-200">
        <h2 class="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Perguntas Frequentes
        </h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure v-auto-animate="{duration: 300, easing: 'ease-in-out'}" as="div" v-for="faq in faqs"
            :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-400">
                <span class="font-medium text-gray-900">{{ faq.question }}</span>
                <span class="ml-6 flex h-7 items-center transition-all">
                  <Icon name="heroicons-outline:chevron-down"
                    :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">{{ faq.answer }}</p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const faqs = [
  {
    question: 'Preciso declarar Imposto de Renda?',
    answer:
      `Todo cidadão que tenha recebido mais de R$ 28.559,70 em rendimentos tributáveis no decorrer
      do ano anterior ao ano em que será realizada a declaração precisa prestar contas à Receita Federal.
      Mas cuidado, existem exceções à regra e outros fatores que indicam obrigatoriedade da declaração!`,
  },
  {
    question: 'Qual o prazo para a Declaração do Imposto de Renda?',
    answer:
      `O prazo final para a entrega da declaração é no dia 30 de abril. Porém, no ano de 2021, por um apelo da classe
      contadora e do Congresso Nacional, devido a pandemia que estamos vivendo, a Receita Federal adiou
      a entrega da DIRPF para o dia 31 de maio.`,
  },
  {
    question: 'Qual a diferença entre declaração simples e completa?',
    answer:
      `Na declaração do IR simples, a Receita Federal utilizará o desconto padrão de 20% sobre todos os
      seus rendimentos tributáveis declarados, limitados a R$ 16.754,34.
      Já na declaração completa, o desconto padrão poderá ser menor que 20%, e isso dependerá dos seus
      gastos dedutíveis (que reduzem o valor do desconto), como despesas com educação (ensino fundamental,
      médio, superior e pós-graduação), saúde ou dependente(s).`,
  }
  // More questions...
]
</script>