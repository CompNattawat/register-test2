$.jgrid.defaults.width = '1500';
$.jgrid.defaults.responsive = true;
$.jgrid.defaults.styleUI = 'Bootstrap';

$(document).ready(function () {

$("#jqGrid_classgroup").jqGrid({
  url: 'getdataSchoolGroup',
  mtype: "GET",
  datatype: "json",
  // page: 1,
  colModel: [
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
caption: "ข้อมูลระดับ",
// loadonce: true,
viewrecords: true,
height: '100%',
rowNum: 20,
pager: "#jqGridPager_classgroup",
toppager:true,
});

// activate the toolbar searching
$('#jqGrid_classgroup').jqGrid('filterToolbar');

// $('#jqGrid_classgroup').navGrid('#jqGridPager_classgroup',
// // the buttons to appear on the toolbar of the grid
// { edit: true, add: true, del: true, search: false, refresh: true, view: true, position: "left", cloneToTop: true },
// // options for the Edit Dialog
// //edit options
// { url: '../maindata/EditDataLevel' },
// //add options
// { url: '../maindata/AddDataLevel' },
// //delete options
// { url: '../maindata/DeleteDataLevel' },
// {
// height: 'auto',
// width: 620,
// recreateForm: true,
// closeAfterEdit: true,
// errorTextFormat: function (data) {
//   return 'Error: ' + data.responseText
// }
// },
// // options for the Add Dialog
// {
// height: 'auto',
// width: 620,
// closeAfterAdd: true,
// recreateForm: true,
// errorTextFormat: function (data) {
//   return 'Error: ' + data.responseText
// }
// },
// // options for the Delete Dailog
// {
// errorTextFormat: function (data) {
//   return 'Error: ' + data.responseText
// }
// });

});
