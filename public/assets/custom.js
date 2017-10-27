// $.jgrid.defaults.width = null;
$.jgrid.defaults.responsive = true;
$.jgrid.defaults.styleUI = 'Bootstrap';

$(function () {

  var grid_element = document.getElementsByClassName('grid');
  var select = grid_element[0].getAttribute('id');
  // console.log(select);

  if(select == "jqGrid_studentdata"){
      $('#jqGrid').jqGrid("clearGridData");
      $('#jqGrid').remove();
      $('#jqGrid_classgroup').jqGrid("clearGridData");
      $('#jqGrid_classgroup').remove();
      $('#jqGrid_subjectgroup').jqGrid("clearGridData");
      $('#jqGrid_subjectgroup').remove();
      createGrid3();
  }
  else if (select == "jqGrid_classgroup") {
    $('#jqGrid').jqGrid("clearGridData");
    $('#jqGrid').remove();
    $('#jqGrid_studentdata').jqGrid("clearGridData");
    $('#jqGrid_studentdata').remove();
    $('#jqGrid_subjectgroup').jqGrid("clearGridData");
    $('#jqGrid_subjectgroup').remove();
    // $('#jqGrid').jqGrid("clearGridData");
    createGrid2();
  }
  else if (select == "jqGrid_subjectgroup") {
    console.log('test');
    $('#jqGrid').jqGrid("clearGridData");
    $('#jqGrid').remove();
    $('#jqGrid_studentdata').jqGrid("clearGridData");
    $('#jqGrid_studentdata').remove();
    $('#jqGrid_classgroup').jqGrid("clearGridData");
    $('#jqGrid_classgroup').remove();
    createGrid4();
  }
  else {
    $('#jqGrid_classgroup').jqGrid("clearGridData");
    $('#jqGrid_classgroup').remove();
    $('#jqGrid_studentdata').jqGrid("clearGridData");
    $('#jqGrid_studentdata').remove();
    $('#jqGrid_subjectgroup').jqGrid("clearGridData");
    $('#jqGrid_subjectgroup').remove();
    createGrid();
  }
  // $.jgrid.gridUnload('#jqGrid');

    $(window).on('resize', function() {
      $(".grid").setGridWidth($(window).width() - 80);
    }).trigger('resize');

function createGrid() {
  $("#jqGrid").jqGrid({
    url: 'getdataSchoolLevel',
    mtype: "GET",
    datatype: "json",
    // page: 1,
    colModel: [
      { label: "เลขที่ระดับบการศึกษา ", name: 'ClassLevelID',hidden: true, editable: true, key: true,
        formoptions: {
          colpos: 1,
          rowpos: 1,
          label: "เลขที่ระดับบการศึกษา *: ",
        }
      },
      { label: "ช่วงชั้นที่ *: ", name: 'ClassGroupID', editable: true,
        formoptions: {
          colpos: 1,
          rowpos: 2,
          label: "ช่วงชั้นที่ *: ",
        },
      },
      { label: 'ระดับชั้น (TH)', name: 'ClassLevelNameTh', editable: true,
        formoptions: {
          colpos: 1,
          rowpos: 3,
          label: "ระดับชั้น (TH): ",
        }
      },
      { label: 'ระดับชั้น (EN)', name: 'ClassLevelNameEn', editable: true,
        formoptions: {
          colpos: 1,
          rowpos: 4,
          label: "ระดับชั้น (EN): ",
        }
      },
      { label: 'เรียงลำดับ', name: 'ClassLevelSorting', editable: true, align: 'center',
        formoptions: {
          colpos: 1,
          rowpos: 5,
          abel: "เรียงลำดับ : ",
        }
      },
      { label: 'แก้ไข', name: 'edit', width: 20, search: false, align: 'center',
      },
      { label: 'ลบ', name: 'delete', width: 20, search: false, align: 'center',
        formatoptions: {
          keys: true,
          deleteOptions: {},
          }
      },

],
caption: "ข้อมูลระดับ",
loadonce: true,
// viewrecords: true,
// sortname: 'ClassGroupID',
height: '100%',
rowNum: 20,
pager: "#jqGridPager",
grouping: true,
toppager:true,
// hoverrows: true,
groupingView: {
  groupField: ["ClassGroupID"],
  groupColumnShow: [false],
  groupText: ["<b>ช่วงชั้นที่ {0}</b>"],
  groupDataSorted: true,
  groupOrder: ['asc'],
  groupSummary: [true],
  groupCollapse: false
}
});
// activate the toolbar searching
$('#jqGrid').jqGrid('filterToolbar');
$('#jqGrid').navGrid('#jqGridPager',
// the buttons to appear on the toolbar of the grid
{ edit: true, add: true, del: true, search: false, refresh: true, view: true, position: "left", cloneToTop: true },
// options for the Edit Dialog
// edit options
{ url: '../maindata/EditDataLevel' },
//add options
{ url: '../maindata/AddDataLevel' },
//delete options
{ url: '../maindata/DeleteDataLevel' },
{
  height: 'auto',
  width: 620,
  recreateForm: true,
  closeAfterEdit: true,
  // afterSubmit: function () { location.reload(true) },
  errorTextFormat: function (data) {
    return 'Error: ' + data.responseText
  },
},
// options for the Add Dialog
{
  height: 'auto',
  width: 620,
  closeAfterAdd: true,
  recreateForm: true,

  errorTextFormat: function (data) {
    return 'Error: ' + data.responseText
  }
},
// options for the Delete Dailog
{

  errorTextFormat: function (data) {
    return 'Error: ' + data.responseText
  }
});
}

function createGrid2() {
  $("#jqGrid_classgroup").jqGrid({
    url: 'getdataSchoolGroup',
    mtype: "GET",
    datatype: "json",
    // page: 1,
    colModel: [
      { label: "ช่วงชั้นที่ ", name: 'ClassGroupID', hidden:true, editable: true, key: true,
        formoptions: {
          colpos: 1,
          rowpos: 1,
          label: "ช่วงชั้นที่ *: ",
        },
      },
      { label: 'ช่วงชั้น (TH)', name: 'ClassGroupTh', editable: true,
        formoptions: {
          colpos: 1,
          rowpos: 2,
          label: "ช่วงชั้น (TH): ",
        }
      },
      { label: 'ช่วงชั้น (EN)', name: 'ClassGroupEn', editable: true,
        formoptions: {
          colpos: 1,
          rowpos: 3,
          label: "ช่วงชั้น (EN): ",
        }
      },
      { label: 'เรียงลำดับ', name: 'ClassGroupSorting', editable: true, align: 'center',
        formoptions: {
          colpos: 1,
          rowpos: 4,
          abel: "เรียงลำดับ : ",
        }
      },
      { label: 'แก้ไข', name: 'edit', width: 20, search: false, align: 'center',
      },
      { label: 'ลบ', name: 'delete', width: 20, search: false, align: 'center',
        formatoptions: {
          keys: true,
          deleteOptions: {},
          }
      },

],
caption: "ข้อมูลช่วงชั้น",
// loadonce: true,
// viewrecords: true,
rownumbers: true,
height: '100%',
rowNum: 20,
pager: "#jqGridPager",
toppager:true,
});
// activate the toolbar searching
$('#jqGrid_classgroup').jqGrid('filterToolbar');
$('#jqGrid_classgroup').navGrid('#jqGridPager',
// the buttons to appear on the toolbar of the grid
{ edit: true, add: true, del: true, search: false, refresh: true, view: true, position: "left", cloneToTop: true },
// options for the Edit Dialog
// edit options
{ url: '../maindata/EditDataGroup' },
//add options
{ url: '../maindata/AddDataGroup' },
//delete options
{ url: '../maindata/DeleteDataGroup' },
{
  height: 'auto',
  width: 620,
  recreateForm: true,
  closeAfterEdit: true,
  afterSubmit: function () { location.reload(true) },
  errorTextFormat: function (data) {
    return 'Error: ' + data.responseText
  },
},
// options for the Add Dialog
{
  height: 'auto',
  width: 620,
  closeAfterAdd: true,
  recreateForm: true,

  errorTextFormat: function (data) {
    return 'Error: ' + data.responseText
  }
},
// options for the Delete Dailog
{

  errorTextFormat: function (data) {
    return 'Error: ' + data.responseText
  }
});
}

// subjectgroup
function createGrid4() {
  $("#jqGrid_subjectgroup").jqGrid({
    url: 'getdataSubjectGroup',
    mtype: "GET",
    datatype: "json",
    // page: 1,
    colModel: [
      { label: "เลขที่กลุ่มสาระวิชา ", name: 'SubjectGroupID', hidden:true, editable: true, key: true,
        formoptions: {
          colpos: 1,
          rowpos: 1,
          label: "เลขที่กลุ่มสาระวิชา : ",
        },
      },
      { label: 'ชื่อกลุ่มสาระวิชา (TH)', name: 'SubjectGroupNameTh', editable: true,
        formoptions: {
          colpos: 1,
          rowpos: 2,
          label: "ชื่อกลุ่มสาระวิชา (TH): ",
        }
      },
      { label: 'ชื่อกลุ่มสาระวิชา (EN)', name: 'SubjectGroupNameEn', editable: true,
        formoptions: {
          colpos: 1,
          rowpos: 3,
          label: "ชื่อกลุ่มสาระวิชา (EN): ",
        }
      },
      { label: 'รายละเอียด', name: 'SubjectGroupDetail', editable: true, align: 'center',
        formoptions: {
          colpos: 1,
          rowpos: 4,
          abel: "รายละเอียด : ",
        }
      },
      { label: 'แก้ไข', name: 'edit', width: 20, search: false, align: 'center',
      },
      { label: 'ลบ', name: 'delete', width: 20, search: false, align: 'center',
        formatoptions: {
          keys: true,
          deleteOptions: {},
          }
      },

],
caption: "ข้อมูลกลุ่มรายวิชา",
// loadonce: true,
// viewrecords: true,
rownumbers: true,
height: '100%',
rowNum: 20,
pager: "#jqGridPager",
toppager:true,
});
// activate the toolbar searching
$('#jqGrid_subjectgroup').jqGrid('filterToolbar');
$('#jqGrid_subjectgroup').navGrid('#jqGridPager',
// the buttons to appear on the toolbar of the grid
{ edit: true, add: true, del: true, search: false, refresh: true, view: true, position: "left", cloneToTop: true },
// options for the Edit Dialog
// edit options
{ url: '../maindata/EditDataSubjectGroup' },
//add options
{ url: '../maindata/AddDataSubjectGroup' },
//delete options
{ url: '../maindata/DeleteDataSubjectGroup' },
{
  height: 'auto',
  width: 620,
  recreateForm: true,
  closeAfterEdit: true,
  afterSubmit: function () { location.reload(true) },
  errorTextFormat: function (data) {
    return 'Error: ' + data.responseText
  },
},
// options for the Add Dialog
{
  height: 'auto',
  width: 620,
  closeAfterAdd: true,
  recreateForm: true,

  errorTextFormat: function (data) {
    return 'Error: ' + data.responseText
  }
},
// options for the Delete Dailog
{

  errorTextFormat: function (data) {
    return 'Error: ' + data.responseText
  }
});
}

//subjectgroup


//studentdata

function createGrid3() {
  $("#jqGrid_studentdata").jqGrid({
    url: 'getStudentData',
    mtype: "GET",
    datatype: "json",
    // page: 1,
    colModel: [
      { label: "เลขที่ ", name: 'StudentID', hidden:true, editable: true,
        formoptions: {
          colpos: 1,
          rowpos: 1,
          label: "เลขที่ *: ",
        }
      },
      { label: 'รหัสนักเรียน ', name: 'StudentCode', editable: true,
        formoptions: {
          colpos: 1,
          rowpos: 2,
          label: "รหัสนักเรียน : ",
        }
      },
      { label: 'ชื่อ-นามสกุล (Th) ', name: 'StudentFullNameTh', editable: true,
        formoptions: {
          colpos: 1,
          rowpos: 2,
          label: "ชื่อ-นามสกุล (Th) : ",
        }
      },
      { label: 'ชื่อ-นามสกุล (En) ', name: 'StudentFullNameEn', editable: true,
        formoptions: {
          colpos: 1,
          rowpos: 2,
          label: "ชื่อ-นามสกุล (En) : ",
        }
      },
      { label: 'หลักสูตร ', name: 'CourseID', editable: true,
        formoptions: {
          colpos: 1,
          rowpos: 2,
          label: "หลักสูตร : ",
        }
      },
      { label: 'เพศ ', name: 'FullNameSex', editable: true,
        formoptions: {
          colpos: 1,
          rowpos: 2,
          label: "เพศ : ",
        }
      },
      { label: 'แก้ไข', name: 'edit', key:true, width: 20, search: false, align: 'center',
        // formatter: "actions",
        formatoptions: {
          keys: true,
          editOptions: {},
          // onclick="return $.fn.fmatter.rowactions.call(this,event,'edit');",
          }
      },
      { label: 'ลบ', name: 'delete', key:true, width: 20, search: false, align: 'center',
        formatoptions: {
          keys: true,
          deleteOptions: {},
          }
      },

],
caption: "ข้อมูลนักเรียน",
loadonce: true,
viewrecords: true,
height: '100%',
rowNum: 20,
pager: "#jqGridPager",
toppager:true,
});
// activate the toolbar searching
$('#jqGrid_studentdata').jqGrid('filterToolbar');
$('#jqGrid_studentdata').navGrid('#jqGridPager',
// the buttons to appear on the toolbar of the grid
{ edit: true, add: true, del: true, search: false, refresh: true, view: true, position: "left", cloneToTop: true },
// options for the Edit Dialog
// edit options
{ url: '../recorddata/EditStudentData' },
//add options
{ url: '../maindata/AddDataLevel' },
//delete options
{ url: '../maindata/DeleteDataLevel' },
{
  height: 'auto',
  width: 620,
  recreateForm: true,
  closeAfterEdit: true,
  errorTextFormat: function (data) {
    return 'Error: ' + data.responseText
  }
},
// options for the Add Dialog
{
  height: 'auto',
  width: 620,
  closeAfterAdd: true,
  recreateForm: true,
  errorTextFormat: function (data) {
    return 'Error: ' + data.responseText
  }
},
// options for the Delete Dailog
{
  errorTextFormat: function (data) {
    return 'Error: ' + data.responseText
  }
});
}

});
