<script setup lang="ts">
  import { h, reactive, watch } from 'vue'
  import { NIcon, MenuOption } from 'naive-ui'
  import { Layers } from '@vicons/ionicons5'
  import {
    DashboardRound,
    AutoAwesomeMosaicRound,
    TableViewRound,
    SmartButtonOutlined,
    AdminPanelSettingsRound,
  } from '@vicons/material'
  import { ChevronRight } from '@vicons/fa'
  import { BoxEdit24Regular } from '@vicons/fluent'
  import { Adjustments } from '@vicons/tabler'
  import { useI18n } from 'vue-i18n'
  import colors from 'windicss/colors'

  const props = defineProps<{ collapsed: boolean }>()

  const { t } = useI18n({ inheritLocale: true })

  const styles = reactive({
    divider: {
      m: props.collapsed ? '0.5rem 0' : '0.8rem 0.5rem 0.5rem 0.5rem',
      h: props.collapsed ? '1px' : '1rem',
      bg: props.collapsed ? colors.dark[200] : colors.transparent,
    },
  })

  watch(
    () => props.collapsed,
    (v) => {
      styles.divider = {
        m: props.collapsed ? '0.5rem 0' : '0.8rem 0.5rem 0.5rem 0.5rem',
        h: v ? '1px' : '1rem',
        bg: v ? colors.dark[200] : colors.transparent,
      }
    }
  )

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
      label: t('orders'),
      key: 'orders',
      icon: () => h(NIcon, null, () => h(TableViewRound)),
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

  const expandIcon = () => h(NIcon, { size: 13 }, () => h(ChevronRight))
</script>

<template>
  <n-menu
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="menuOptions"
    :render-label="renderMenuLabel"
    :expand-icon="expandIcon"
    :class="[collapsed ? 'menu-collapsed' : 'menu', 'flex-grow']"
    accordion
  />
  <n-menu
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="sysOptions"
    :render-label="renderMenuLabel"
    :expand-icon="expandIcon"
    :class="[collapsed ? 'menu-collapsed' : 'sys-menu']"
    accordion
  />
</template>

<style scoped lang="less">
  :deep(.n-menu-divider) {
    margin: v-bind('styles.divider.m') !important;
    height: v-bind('styles.divider.h') !important;
    background-color: v-bind('styles.divider.bg') !important;
    @apply relative flex-shrink-0 text-xs transition-none;
    &::before {
      @apply absolute inset-y-0 my-auto;
    }
    &:nth-of-type(1) {
      @apply !mt-0;
    }
  }

  .menu,
  .sys-menu {
    @apply select-none flex-shrink-0 flex flex-col justify-start my-4 px-4 overflow-y-hidden;
  }
  .menu {
    :deep(.divider-category1)::before {
      content: var(--menu-category1);
    }
    :deep(.divider-category2)::before {
      content: var(--menu-category2);
    }
    :deep(.divider-category3)::before {
      content: var(--menu-category3);
    }
    :deep(.n-menu-item) {
      @apply flex-shrink-0 !my-0.5;
      .n-menu-item-content {
        @apply !px-2 before:inset-x-0;
      }
      .n-menu-item-content-header {
        @apply block font-bold;
      }
      .n-menu-item-content__arrow {
        @apply block;
      }
    }
    :deep(.n-submenu) {
      @apply flex-shrink-0 mt-0 overflow-hidden;
      .n-submenu-children {
        @apply relative pl-4 max-h-68 !overflow-auto;
      }
    }

    :deep(.n-menu-item-content .n-menu-item-content__arrow) {
      @apply transform !rotate-90;
    }
    :deep(.n-menu-item-content--collapsed .n-menu-item-content__arrow) {
      @apply transform !rotate-0;
    }
  }

  .sys-menu {
    @apply flex-shrink-0;
    :deep(.n-menu-item) {
      @apply flex-shrink-0;
      .n-menu-item-content {
        @apply flex items-center justify-center !p-0 font-bold;
      }
    }
  }
  .menu-collapsed {
    :deep(.n-menu-item-content) {
      @apply flex items-center justify-center !px-0 before:inset-x-0;
    }
    :deep(.n-menu-item-content-header) {
      @apply hidden;
    }
    :deep(.n-menu-item-content__icon) {
      @apply !mr-0;
    }
    :deep(.n-menu-item-content__arrow) {
      @apply hidden;
    }
  }
</style>

<i18n lang="yaml">
en:
  panes: Panes
  dashboard: Dashboard
  orders: Data order
  components: Components
  common: Common
  layouts: Layouts
  materials: Material Pool
  editor: Editor
  auth: Authorization
  sys: Preferences
zh-CN:
  panes: 面板
  dashboard: 仪表盘
  orders: 数据单
  common: 通用
  components: 组件库
  layouts: 布局
  materials: 物料池
  editor: 编辑器
  auth: 权限管理
  sys: 偏好设置
</i18n>
