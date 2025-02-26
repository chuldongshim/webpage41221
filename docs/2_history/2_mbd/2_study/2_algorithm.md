---
id: algorithm
title: FFT & Kalman
---

<div align="right">
  <font size="4">
    2016 ~ 2023<br/>
  </font>
</div>

---

### Kalman Filter학습 및 시뮬레이션 {#mymbd-bldc-kalman-simulation-study}

* 기간 : 21.04.07~21.05.06
* 칼만필터 이론 학습 및 칼만필터를 통한 Noisy DC모터 속도측정 : <a href="/assets/kalman/Webpage_Maxon_Motor_3_Kalman_.html" target="_blank">Kalman Filter [☜ click for more]</a>
* 칼만필터를 통한 상태피드백 제어 : <a href="/assets/kalman/Webpage_Maxon_Motor_4_Stochastic_.html" target="_blank">Stochastic Estimation Control by LQG [☜ click for more]</a>
* 외란관측기(TBD) : <a href="/assets/kalman/Q_filter.html" target="_blank">Q-Filter [☜ click for more]</a>

<div style={{width: '100%', textAlign: 'center'}}>
	<img
		src={require('/img/2_mbd/mymbd-kalman-simulation.png').default}
		style={{width: '100%'}}
		alt="Example banner"
	/><br/><em>&lt;Simulink 모델을 통한 칼만필터 시뮬레이션&gt;</em>
</div>

### Kalman Filter이론학습(Self_Study) {#mymbd-kalman-therom-study}

고전제어만 경험하고 현대제어이론을 경험해 보지 못한부분에 대한 아쉬움으로 현대제어이론과 이를 응용하는 칼만필터이론을 책을 통해 학습하였습니다.
* 기간 : 16.10.03~17.04.30

<div style={{width: '100%'}}>
	<img
		src={require('/img/2_mbd/mymbd-kalman-selfstudy.png').default}
		style={{width: '100%'}}
		alt="Example banner"
	/>
</div>

처음에는 대부분이 이해가 되지 않았지만 모르는 것을 하나하나 정리하고 이해하는 과정을 통해 현대제어 이론이 어떤 것이라는 것을 얕게나마 이해할 수 있었습니다.

<div style={{width: '100%'}}>
	<img
		src={require('/img/2_mbd/mymbd-kalman-selfstudy-note.png').default}
		style={{width: '100%'}}
		alt="Example banner"
	/>
</div>

### FFT MCU 구현 및 Matlab 연동  {#mymbd-wiper-fft}
* 기간 : 22.08.14~22.08.29
* <a href="/assets/mbd/Webpage_Ews_S32K1_FFT.html" target="_blank">MCU에서 생성한 샘플신호에 대하여 FFT연산을 수행한 다음 Serial통신을 통해 Matlab Realtime Plot [☜ click for more detail]</a>

<div style={{width: '100%'}}>
	<img
		src={require('/img/2_mbd/mymbd-wiper-fft_1.png').default}
		style={{width: '100%'}}
		alt="Example banner"
	/>
</div>
