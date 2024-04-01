---
id: agile_mbd
title: github agile_mbd
---

<div align="right">
  <font size="4">
    2022 ~ 2024<br/>
		about 12 weeks (3 years)
  </font>
</div>

---

### Github를 통한 Agile기반 리눅스 프로젝트 일정 및 이슈관리 {#myprocess-github-linux}
리눅스 기반 IOT 제품 개발

### Github를 통한 Agile기반 MBD 프로젝트 일정 및 이슈관리 {#myprocess-github-mbd}
알고리즘 개발

### Github를 통한 Agile기반 임베디드 프로젝트 일정 및 이슈관리 {#myprocess-github-embedded}
MBD로 구현한 기능을 코드로 자동생성하고, 임베디드 시스템에 통합한 스마트도어 프로젝트로 Github를 통해 Agile 기반으로 프로젝트를 진행하였습니다.
본 프로젝트를 통해 단기간에 개발 목표를 완료할 수 있는 경험을 하였고, 앞으로 Agile 기반으로 프로젝트를 수행해야 겠다고 생각할 수 있는 계기가 되었습니다.

<p align="center">
	<img
		src={require('/img/4_ews2/ews2_spec_summary_plan.png').default}
		alt="Example banner"
		width="550"
	/><br/><em>&lt;Github 환경에서 프로젝트 일정 및 이슈관리&gt;</em>
</p>

### 2.1 A-SPICE를 준수하는 소프트웨어 컴포넌트 MBD개발 프로세스 구축 {#myprocess-esc-swc-by-mbd-aspice}

Mathworks에서 제안하는 개발프로세스를 기반으로 예제 프로젝트 진행를 진행하여 소프트웨어 개발 시 모델기반설계기법이 어떻게 A-SPICE 프로세스를 준수할 수 있는지 검증하였으며, 요구사항부터 시험까지 일관된 추적성을 유지하며 개발하는 방법론을 수립하였습니다.
<p align="center">
	<img
		src={require('/img/1_process/swc_dev_process_by_mbd_and_aspice.png').default}
		width="450"
		alt="Example banner"
	/>
</p>

본 프로젝트에서는 시스템 전체를 개발대상으로 하지 않고, 특정 SwC(Safety Logic)만을 개발 대상으로 한정하여 진행하였습니다.
예제를 통해 A-SPICE를 준수하는 소프트웨어 컴포넌트 MBD개발 프로세스를 구축하고, 이를 바탕으로 요구사항을 정의하고 아키텍처 설계 후 상세설계/구현을 진행하고 마지막으로 구현된 기능을 검증하는 순서로 진행하였습니다.

<p align="center">
	<img
		src={require('/img/1_process/Esc_1_Architecture_Desing.png').default}
		width="450"
		alt="Example banner"
	/><br/><em>&lt;아키텍처 설계(요구사항을 아키텍처에 할당)&gt;</em>
</p>

* 시스템 요구사항 정의
* 소프트웨어 요구사항 정의
* 시스템 아키텍처 설계
* 소프트웨어 아키텍처 설계

기능 아키텍처를 바탕으로 소프트웨어 아키텍처 설계를 완료하면 
<p align="center">
	<img
		src={require('/img/1_process/Esc_2_Architecture_Total.png').default}
		width="450"
		alt="Example banner"
	/><br/><em>&lt;최종 아키텍처&gt;</em>
</p>

* Functional Architecture
* Hardware(Physical) Architecture
* Software(Logical) Architecture

시뮬레이션을 통해 소프트웨어 로직이 어떻게 동작하는지 확인하면서 상세설계를 진행합니다.  
<p align="center">
	<iframe 
		src="https://www.youtube.com/embed//UangAsyZEFc?rel=0"
		width="350" height="250"
		frameborder="0"
		allowfullscreen="true">
		이 브라우저는 iframe을 지원하지 않습니다.
	</iframe><br/><em>&lt;시뮬레이션을 통한 소프트웨어 상세설계 및 구현 동영상&gt;</em>
</p>

상세설계 이후 테스트케이스를 기반으로 설계한 기능이 원하는 동작을 수행하는지 기능시험을 진행하고, 테스트레포트를 생성하여 소프트웨어 기능검증을 완료한 다음
<p align="center">
	<img
		src={require('/img/1_process/Esc_4_Reqs_based_Func_Test.png').default}
		width="450"
		alt="Example banner"
	/><br/><em>&lt;기능검증&gt;</em>
</p>

* 소프트웨어 정적분석(T.B.D)
* 소프트웨어 유닛/통합 시험(T.B.D)
* 소프트웨어 기능 시험

끝으로 모든 요구사항이 시스템 엘리먼트와 소프트웨어 컴포넌트에 할당되었는지와 요구사항이 시스템/소프트웨어 기능에 모두 할당되었는지 Traceability Matrix를 통하 확인 하였습니다.
<p align="center">
	<img
		src={require('/img/1_process/Esc_5_All_Traceability.png').default}
		width="600"
		alt="Example banner"
	/><br/><em>&lt;추적성을 통한 무결성 확보&gt;</em>
</p>

* ①SysR_SysF : 시스템 요구사항과 시스템 기능 추적
* ②SysR_SysEL : 시스템 요구사항과 시스템 엘리먼트 추적
* ③SysR_SwR : 시스템 요구사항과 소프트웨어 요구사항 추적
* ④SwR_SwC : 소프트웨어 요구사항과 소프트웨어 유닛 추적
* ⑤SwR_SwF : 소프트웨어 요구사항과 소프트웨어 기능 추적
* ⑥SwF_SwFTC : 소프트웨어 기능과 소프트웨어 기능 테스트케이스 추적

### 2.2 A-SPICE 대응 선루프 시스템 설계 {#myprocess-std-sys-design-sunroof}

* 소속 : DYESSYS(DYAUTO, ESSYS 합작사)
* 기간 : 19.11.14 ~ 20.05.31 (책임 2년차)
* 역할 : Sunroof 선행개발 프로젝트 시스템 설계(양산수주로 이어짐)

표준 프로세스를 기반으로 Process Tailoring을 수행하여 선행개발 프로세스를 수립하고 프로젝트 일정을 관리하였습니다. 이 프로젝트는 요구사항정의/설계/구현/검증 절차에 따라 개발을 진행하고 프로젝트 일정 및 이슈관리를 수행한 내용들을 고객에게 어필하여 추후 고객에게 수주를 받아 양산 개발로 이어질 수 있었습니다.

<p align="center">
	<img
		src={require('/img/1_process/b_process_sunroof_prj_mgn.png').default}
		width="450"
		alt="Example banner"
	/><br/><em>&lt;선루프 개발 프로젝트 일정 관리&gt;</em>
</p>

일정관리와 함께 선루프 아이템을 대상으로 고객 요구사항을 분석하여 시스템 아키텍처를 설계하고 기능을 정의하였습니다. 소프트웨어 엔지니어를 통한 기능구현 완료 후 기능 시험스펙을 작성하고 시스템 시험을 직접 수행하여 요구사항에 따라 소프트웨어가 구현되었는지를 검증하였습니다.

<p align="center">
	<img
		src={require('/img/1_process/c_process_sunroof_sysads.png').default}
		width="450"
		alt="Example banner"
	/><br/><em>&lt;선루프 시스템 아키텍처 설계&gt;</em>
</p>

### 2.3 프로젝트 관리 및 A-SPICE CL3 인증 {#myprocess-std-cl3}

A-SPICE/ISO26262 표준 프로세스 구축 프로젝트 PM으로 다음 역할을 수행하여 A-SPICE CL3 인증을 획득하였습니다.

* A-SPICE(CL3달성) 및 ISO26262 대응
* 소속 : DYESSYS(DYAUTO, ESSYS 합작사)
* 기간 : 2019.05 ~ 2019.12 (책임 1년차)
* 역할 : 표준 프로세스 고도화 및 프로젝트 관리

A-SPICE CL2 인증을 받은 파워윈도우 양산 재품을 대상으로 A-SPICE CL3 인증을 받기 위해 컨설팅을 받으면서 사내 표준 프로세스를 수립하고, A-SPICE 표준 프로세스를 기반으로 PM역할을 수행하여 프로젝트 일정관리를 통해 기간내에 프로젝트를 완료할 수 있는 방법을 습득할 수 있었습니다. 여기서 수행한 프로젝트 관리 업무는 이후 프로젝트를 효율적으로 관리하는 방법론을 모색할 수 있는 중요한 경험적인 토대가 되었습니다.

* 사내 개발 표준 프로세스 수립
* 개발 일정 WBS 수립
* 프로젝트 산출물 및 개발 일정 관리
* 인증 심사 대응

<p align="center">
	<img
		src={require('/img/1_process/a_process_std.png').default}
		width="450"
		alt="Example banner"
	/><br/><em>&lt;A-SPICE/ISO26262 통합 표준 프로세스 수립&gt;</em>
</p>