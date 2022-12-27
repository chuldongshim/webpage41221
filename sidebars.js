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
	'mycareer',
    {
      type: 'category',
      label: '1. 컨텐츠별',
      link: {
        type: 'doc',
        id: 'mycareer/contents',
      },
      collapsed: false,
      items: [
        'mycareer/contents/mycareer_mbd',
        'mycareer/contents/mycareer_process',
        'mycareer/contents/mycareer_embedded',
      ],
    },
	'mycareer/time',
  ],
  sideprj: [
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
    /*{
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
    },*/
  ],
};
