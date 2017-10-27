<!-- header -->
<div class="navbar navbar-inverse navbar-static-top" role="navigation">
  <div class="container-fluid">
    <div class="navbar-header">

      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <div class="navbar-brand">Example &nbsp;</div>

    </div>
    <div class="navbar-collapse collapse">

      <ul class="nav navbar-nav navbar-menu">
        <li><a href="#">หน้าแรก</a></li>
        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">ข้อมูลหลัก <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li class="dropdown-submenu"><a href="#">โครงสร้างโรงเรียน <span class="caret-right"></span></a>
              <ul class="dropdown-menu">
                <li ><a href="<?= $this->url->getBaseuri() ?>maindata/classgroup" data-id="1" data-name="ข้อมูลช่วงชั้น" class="menu_list"> ข้อมูลช่วงชั้น</a></li>
                <li ><a href="<?= $this->url->getBaseuri() ?>maindata/classlevel" data-id="2" data-name="ข้อมูลระดับ" class="menu_list"> ข้อมูลระดับ</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu"><a href="#">ข้อมูลหลักทะเบียน <span class="caret-right"></span></a>
              <ul class="dropdown-menu">
                <li><a href="<?= $this->url->getBaseuri() ?>maindata/subjectgroup" class="menu_list">ข้อมูลกลุ่มสาระวิชา</a></li>
                <li><a href="#" class="menu_list">ข้อมูลประเภทรายวิชา</a></li>
                <li><a href="#" class="menu_list">ข้อมูลรายวิชา</a></li>
                <li><a href="#" class="menu_list">ข้อมูลคำนำหน้าชื่อ</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">ระเบียน <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" >ข้อมูลปีการศึกษา</a></li>
            <li><a href="#" >ข้อมูลหลักสตร</a></li>
            <li><a href="#" >ข้อมูลอาจารย์</a></li>
            <li><a href="<?= $this->url->getBaseuri() ?>recorddata/studentdata" >ข้อมูลนักเรียน</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"> จัดการระบบ <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" >ข้อมูลโครงสร้างระบบ</a></li>
            <li><a href="#" >ข้อมูลการใช้งาน</a></li>
          </ul>
        </li>
      </ul>

      <ul class="nav navbar-nav navbar-right hidden-xs">
        <li class="divider-vertical"></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Language <b class="caret"></b></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="/example/backend/index/th" >ภาษาไทย</a>
              <li><a href="/example/backend/index/en" >ภาษาอังกฤษ</a>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- header -->

    <!-- content -->
    <div class="container-fluid container-body">
      <!-- BEGIN CONTENT BODY -->
      

  <div class="panel panel-default">
    <div class="panel-heading">
    <span class="ui-jqgrid-title-icon glyphicon glyphicon-folder-close"></span>ข้อมูลกลุ่มสาระวิชา</div>
    <div class="panel-body" style="margin-left:20px">
        <div id="jqGridPager"></div>
        <table class="grid" id="jqGrid_subjectgroup"></table>
    </div>
  </div>



    </div>

    <!-- content -->
