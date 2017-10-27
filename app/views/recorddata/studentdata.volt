{% extends "layouts/layouts.volt" %}
{% block contents %}

  <div class="panel panel-default">
    <div class="panel-heading"><span class="ui-jqgrid-title-icon glyphicon glyphicon-education"></span> ข้อมูลนักเรียน</div>
    <div class="panel-body" style="margin-left:20px">
        <div id="jqGridPager"></div>
        <table class="grid" id="jqGrid_studentdata"></table>
        {#<div id="jqGridPager-botton"></div>#}
    </div>
  </div>

{% endblock %}
