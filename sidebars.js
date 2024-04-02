/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  mycareer: [
    {
      type: 'category',
      label: '경력요약',
      link: {
        type: 'doc',
        id: 'mycareer',         // id속성은 type이 category인 경우에만 적용이 가능함
      },
      collapsed: true,
      items: [
        'mycareer/contents',
        'mycareer/time',
      ],
    },
  ],
  history: [                    // 경력상세 탭
    {
      type: 'category',
      label: '임베디드',
      link: {
        type: 'doc',
        //id: 'history',
        id: 'history/embed',
      },
      collapsed: false,         // 페이지 처음 Open 시 펼치고 싶으면 주석처리 후 true 설정
      items: [
        {
          type: 'category',
          label: '센서',
          link: {
            type: 'doc',
            id: 'history/embed/sensor',
          },
          collapsed: true,
          items: [
            'history/embed/sensor/judo',
            'history/embed/sensor/ftsensor',
          ],
        },
        {
          type: 'category',
          label: '제어기',
          link: {
            type: 'doc',
            id: 'history/embed/controller',
          },
          collapsed: true,
          items: [
            'history/embed/controller/traindoor',
            {
              type: 'category',
              label: '스마트 도어',
              link: {
                type: 'doc',
                id: 'history/embed/controller/smartdoor',
              },
              collapsed: true,
              items: [
                'history/embed/controller/smartdoor/sd_guide',
                'history/embed/controller/smartdoor/sd_spec',
              ],
            },
            'history/embed/controller/ethernetM',
            'history/embed/controller/kuve',
            'history/embed/controller/iap',
          ],
        },
        {
          type: 'category',
          label: '리눅스',
          link: {
            type: 'doc',
            id: 'history/embed/linux',
          },
          collapsed: true,
          items: [
            'history/embed/linux/eyeRec',
            'history/embed/linux/fujixerox',
            'history/embed/linux/stm32f7',
            'history/embed/linux/casDetector',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '모델기반설계',
      link: {
        type: 'doc',
        id: 'history/mbd',
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '모터구동',
          link: {
            type: 'doc',
            id: 'history/mbd/motor',
          },
          collapsed: true,
          items: [
            'history/mbd/motor/windowMotor',
            'history/mbd/motor/wiperMotor',
            {
              type: 'category',
              label: 'bldc 확장보드',
              link: {
                type: 'doc',
                id: 'history/mbd/motor/bldc',
              },
              collapsed: true,
              items: [
                'history/mbd/motor/bldc/bldc_guide',
                'history/mbd/motor/bldc/bldc_spec',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '로직구현',
          link: {
            type: 'doc',
            id: 'history/mbd/logic',
          },
          collapsed: true,
          items: [
            'history/mbd/logic/escalator',
            'history/mbd/logic/safetybelt',
          ],
        },
        {
          type: 'category',
          label: '스터디',
          link: {
            type: 'doc',
            id: 'history/mbd/study',
          },
          collapsed: true,
          items: [
            'history/mbd/study/tempPID',
            'history/mbd/study/algorithm',
          ],
        },
        {
          type: 'category',
          label: '논문',
          link: {
            type: 'doc',
            id: 'history/mbd/paper',
          },
          collapsed: true,
          items: [
            'history/mbd/paper/skeleton',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '프로세스',
      link: {
        type: 'doc',            // 경력상세 탭 하위에 Sidebar가 있어야 하므로 
        id: 'history',          // history 1개는 무조껀 있어야 함 (24.04.01)
        //id: 'history/proc',  // history/proc를 history로 대체하니까 되서 꼼수로 적용하고
      },                        // history에 proc내용을 채움
      collapsed: true,
      items: [
        'history/proc/std_proc',
        'history/proc/agile_mbd',
      ],
    },
  ],
/*  sideprj: [
    'sideprj',
    {
      type: 'category',
      label: '1. MBD를 통한 A-SPICE 준수',
      link: {
        type: 'doc',
        id: 'sideprj/mbd',
      },
      collapsed: true,
      items: [
        'sideprj/mbd/escswc_mgn',
        'sideprj/mbd/escswc_sys',
        'sideprj/mbd/escswc_sw',
      ],
    },
    {
      type: 'category',
      label: '2. 임베디드 웹서버OTA',
      link: {
        type: 'doc',
        id: 'sideprj/hybrid',
      },
      collapsed: true,
      items: [
        'sideprj/hybrid/esp32_mgn',
        'sideprj/hybrid/esp32_sys',
        'sideprj/hybrid/esp32_hw',
        'sideprj/hybrid/esp32_sw',
      ],
    },
    {
      type: 'category',
      label: '3. MBD기반 윈도우',
      link: {
        type: 'doc',
        id: 'sideprj/window',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: '설계',
          link: {
            type: 'doc',
            id: 'sideprj/window/window_design',
          },
          collapsed: false,
          items: [
            'sideprj/window/window_design_cencept',
            'sideprj/window/window_design_reqs',
            'sideprj/window/window_design_architecture',
          ],
        },
        {
          type: 'category',
          label: '구현',
          link: {
            type: 'doc',
            id: 'sideprj/window/window_realize',
          },
          collapsed: false,
          items: [
            'sideprj/window/window_realize_f0_PlantModeling',
            'sideprj/window/window_realize_f0_VelMeasure',
            'sideprj/window/window_realize_f1_AutoManual',
            'sideprj/window/window_realize_f2_Profiling',
            'sideprj/window/window_realize_f3_FeedbackControl',
            'sideprj/window/window_realize_f4_Initialize',
            'sideprj/window/window_realize_f5_SoftStop',
            'sideprj/window/window_realize_f6_AntiPinch',
            'sideprj/window/window_realize_f7_KalmanFilter',
          ],
        },
        {
          type: 'category',
          label: '검증',
          link: {
            type: 'doc',
            id: 'sideprj/window/window_verify',
          },
          collapsed: false,
          items: [
            //'sideprj/window/window_verify_autocode_strategy',
            //'sideprj/window/window_verify_mcu_porting',
            'sideprj/window/window_verify_autocode_generate',
            'sideprj/window/window_verify_func_test',
            'sideprj/window/window_verify_traceability',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '4. MBD기반 와이퍼',
      link: {
        type: 'doc',
        id: 'sideprj/wiper',
      },
      collapsed: true,
      items: [
        'sideprj/wiper/wiper_plan',
        'sideprj/wiper/wiper_devenv',
        'sideprj/wiper/wiper_verify',
      ],
    },
    {
      type: 'category',
      label: '5. MBD기반 온도PID제어',
      link: {
        type: 'doc',
        id: 'sideprj/temperature',
      },
      collapsed: true,
      items: [
        'sideprj/temperature/temperature_mgn',
        'sideprj/temperature/temperature_design',
        //'sideprj/temperature/temperature_controlStick',
      ],
    },
    {
      type: 'category',
      label: '6. 임베디드 리눅스 (TBD)',
      link: {
        type: 'doc',
        id: 'sideprj/linux',
        //type: 'generated-index',
		//description: '리눅스 플랫폼 상에서 IOT 통합 시스템 개발!',
      },
      collapsed: true,
      items: [
        'sideprj/linux/linuxapp',
      ],
    },
  ],*/
};
