<script setup lang="ts">
  import { h } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { NIcon, MenuOption } from 'naive-ui'
  import { Layers } from '@vicons/ionicons5'
  import {
    DashboardRound,
    AutoAwesomeMosaicRound,
    SmartButtonOutlined,
    AdminPanelSettingsRound,
  } from '@vicons/material'
  import { BoxEdit24Regular, TagLock16Regular } from '@vicons/fluent'
  import { Adjustments } from '@vicons/tabler'

  const { t } = useI18n({ inheritLocale: true })

  defineProps<{ collapsed: boolean }>()

  const menuOptions: MenuOption[] = [
    {
      key: 'divider-category1',
      type: 'divider',
      props: {
        title: 'category1',
        class: 'divider-category1',
        style: {
          '--menu-category1': `'${t('panes')}'`,
        },
      },
    },
    {
      label: t('dashboard'),
      key: 'dashboard',
      icon: () => h(NIcon, null, () => h(DashboardRound)),
    },
    {
      label: t('contracts'),
      key: 'contract',
      icon: () => h(NIcon, null, () => h(TagLock16Regular)),
    },
    {
      key: 'divider-category2',
      type: 'divider',
      props: {
        title: 'components',
        class: 'divider-category2',
        style: {
          '--menu-category2': `'${t('components')}'`,
        },
      },
    },
    {
      label: t('common'),
      key: 'common',
      icon: () => h(NIcon, null, () => h(Layers)),
      children: [
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
        {
          label: t('button'),
          key: 'button',
          icon: () => h(NIcon, null, () => h(SmartButtonOutlined)),
        },
      ],
    },
    {
      label: t('layouts'),
      key: 'layouts',
      icon: () => h(NIcon, null, () => h(AutoAwesomeMosaicRound)),
      children: [],
    },
    {
      key: 'divider-category3',
      type: 'divider',
      props: {
        title: 'panes',
        class: 'divider-category3',
        style: {
          '--menu-category3': `'${t('materials')}'`,
        },
      },
    },
    {
      label: t('editor'),
      key: 'editor',
      icon: () => h(NIcon, null, () => h(BoxEdit24Regular)),
      children: [],
    },
  ]

  const sysOptions: MenuOption[] = [
    {
      label: t('auth'),
      key: 'auth',
      icon: () => h(NIcon, null, () => h(AdminPanelSettingsRound)),
    },
    {
      label: t('sys'),
      key: 'sys',
      icon: () => h(NIcon, null, () => h(Adjustments)),
    },
  ]

  /**
   * Render the menu item label.
   */
  const renderMenuLabel = (option: MenuOption) => {
    if ('href' in option) {
      return h(NIcon, { href: option.href, target: '_blank' }, [
        option.label as string,
      ])
    }
    return option.label as string
  }
</script>

<template>
  <n-el
    class="flex-grow flex flex-col justify-between space-y-6 overflow-y-hidden"
  >
    <n-menu
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :render-label="renderMenuLabel"
      accordion
    />
    <n-menu
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="sysOptions"
      :render-label="renderMenuLabel"
      accordion
    />
  </n-el>
</template>

<style lang="less">
  .n-layout-sider {
    .n-menu-divider {
      @apply relative mx-1 my-2 h-4 mt-3 first-of-type:mt-0 whitespace-nowrap bg-transparent transition-none;
      @apply before:(absolute left-0 text-xs inset-y-0);
    }
    .n-menu-item {
      @apply flex-shrink-0 !my-0.5;
      .n-menu-item-content {
        @apply !px-2 before:inset-x-0;
      }
      .n-menu-item-content-header,
      .n-menu-item-content__arrow {
        @apply block font-bold;
      }
    }
  }
  .n-layout-sider[data-collapsed='true'] {
    .n-menu {
      @apply !mx-0 !px-2;
    }
    .n-menu-divider {
      @apply mx-2 my-2 p-0 h-1px bg-light-900 dark:bg-dark-200;
      @apply before:(hidden);
    }
    .n-menu-item {
      @apply py-0 px-1;
      .n-menu-item-content {
        @apply flex items-center justify-center;
      }
      .n-menu-item-content-header,
      .n-menu-item-content__arrow {
        @apply hidden;
      }
      .n-menu-item-content__icon {
        @apply !mr-0;
      }
    }
  }
</style>

<style scoped lang="less">
  .n-menu {
    &:nth-of-type(1) {
      @apply mr-1 mt-4 pl-4 pr-3 !overflow-y-scroll;

      &::-webkit-scrollbar {
        @apply w-1.5;
      }
      &::-webkit-scrollbar-track {
        @apply hidden;
      }
      &::-webkit-scrollbar-thumb {
        @apply bg-green-500/20 rounded-full;
      }
      &::-webkit-scrollbar-thumb:hover {
        @apply bg-green-500/80 dark:bg-green-500;
      }
      :deep(.divider-category1)::before {
        content: var(--menu-category1);
      }
      :deep(.divider-category2)::before {
        content: var(--menu-category2);
      }
      :deep(.divider-category3)::before {
        content: var(--menu-category3);
      }
      :deep(.n-submenu) {
        @apply mt-0 overflow-hidden;
        .n-submenu-children {
          @apply relative pl-4;
        }
      }
      :deep(.n-menu-item-content .n-menu-item-content__arrow) {
        @apply transform !rotate-0;
      }
      :deep(.n-menu-item-content--collapsed .n-menu-item-content__arrow) {
        @apply transform !-rotate-90;
      }
    }
    &:nth-of-type(2) {
      @apply flex-shrink-0 px-4 !pb-8;
      :deep(.n-menu-item) {
        @apply flex-shrink-0;
        .n-menu-item-content {
          @apply flex items-center justify-center !p-0 font-bold;
        }
      }
    }
  }
</style>

<i18n lang="yaml">
en:
  panes: Panes
  dashboard: Dashboard
  contracts: Smart Contracts
  components: Components
  common: Common
  button: Buttons
  layouts: Layouts
  materials: Material Pool
  editor: Editor
  auth: Authorization
  sys: Preferences
zh-CN:
  panes: 面板
  dashboard: 数据板
  contracts: 智能合约
  components: 组件库
  common: 通用
  button: 按钮
  layouts: 布局
  materials: 物料池
  editor: 编辑器
  auth: 权限管理
  sys: 偏好设置
</i18n>
