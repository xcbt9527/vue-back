/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

@Component({
  template: require('./article.html'),
  name: 'article',
  components: {}
})

export default class article extends Vue {
  modal: boolean = false;
  columns7: Array<any> = [
    {
      title: 'Name',
      key: 'name',
      render: (h, params) => {
        return h('div', [
          h('Icon', {
            props: {
              type: 'person'
            }
          }),
          h('strong', params.row.name)
        ]);
      }
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    },
    {
      title: 'Action',
      key: 'action',
      width: 170,
      align: 'center',
      render: (h, params) => {
        return h('div', [
          h('Button', {
            props: {
              type: 'primary',
              size: 'small',
              icon: 'edit'
            },
            style: {
              marginRight: '5px'
            },
            on: {
              click: () => {
                this.show(params.index)
              }
            }
          }, '编辑'),
          h('Button', {
            props: {
              type: 'error',
              size: 'small',
              icon: 'android-delete'
            },
            on: {
              click: () => {
                this.remove(params.index)
              }
            }
          }, '删除')
        ]);
      }
    }
  ];
  data6: Array<any> = [
    {
      name: 'John Brown',
      age: 18,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park'
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park'
    }
  ]

  show(index) {
    this.modal = !this.modal;
  };

  remove(index) {
    this.data6.splice(index, 1);
  }
}
