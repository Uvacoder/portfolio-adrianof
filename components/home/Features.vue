<template>
  <div id="features" class="relative bg-white py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <!-- <h2 class="text-lg font-semibold text-indigo-600">Deploy faster</h2> -->
      <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tudo o que você precisa para sua empresa</h2>
      <p class="mx-auto mt-5 max-w-prose text-xl text-gray-700">Minha experiência me fornece um conjunto de qualidades bem definidas, incluindo altas capacidades organizacionais e de comunicação.</p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root rounded-lg bg-gray-100 px-6 pb-8 h-full">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                    <Icon :name="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">{{ feature.name }}</h3>
                <p class="mt-5 text-base text-gray-700">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const features = [
  {
    name: 'Imposto de Renda',
    description: 'Pessoa Física ou Jurídica',
    icon: 'ic:baseline-business',
  },
  {
    name: 'Abertura e Fechamento de Empresas',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: 'ic:baseline-business',
  },
  {
    name: 'Consultorias',
    description: 'Ac tincidunt sapien vehicula erat .',
    icon: 'heroicons-outline:arrow-path',
  },
  {
    name: 'Advanced Security',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit .',
    icon: 'heroicons-outline:shield-check',
  },
  {
    name: 'Powerful API',
    description: 'Ac magna sit .',
    icon: 'heroicons-outline:cog',
  },
  {
    name: 'Database Backups',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit .',
    icon: 'heroicons-outline:server',
  },
]
</script>