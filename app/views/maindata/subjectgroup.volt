{% extends "layouts/layouts.volt" %}
{% block contents %}

  <div class="panel panel-default">
    <div class="panel-heading">
    <span class="ui-jqgrid-title-icon glyphicon glyphicon-folder-close"></span>ข้อมูลกลุ่มสาระวิชา</div>
    <div class="panel-body" style="margin-left:20px">
        <div id="jqGridPager"></div>
        <table class="grid" id="jqGrid_subjectgroup"></table>
    </div>
  </div>

{% endblock %}
