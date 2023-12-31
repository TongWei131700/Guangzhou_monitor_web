import Vue from 'vue'
import * as echarts from 'echarts/core'
import {
  LineChart,
  PieChart
} from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import {
  CanvasRenderer
} from 'echarts/renderers'

echarts.use([TitleComponent, TooltipComponent, GridComponent, LegendComponent, LineChart, PieChart, CanvasRenderer])
Vue.prototype.$echarts = echarts

