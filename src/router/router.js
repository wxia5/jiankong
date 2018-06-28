import mainComponent from '../../src/components/layout/main/content.vue';
import footerComponent from '../../src/components/layout/main/footer.vue';
import mainComponent1 from '../../src/components/layout/main1/content.vue';
import footerComponent1 from '../../src/components/layout/main1/footer.vue';
import main from '../components/Main.vue';
export const appRouter = [{
  path: '/',
  component: main,
  children: [{
    path: 'main',
    components: {
      a: mainComponent,
      b: footerComponent
    }
  }]
},
{
  path: '/',
  component: main,
  children: [{
    path: 'main1',
    components: {
      a: mainComponent1,
      b: footerComponent1
    }
  }]
}
];
