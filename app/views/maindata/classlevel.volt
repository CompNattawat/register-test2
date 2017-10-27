{% extends "layouts/layouts.volt" %}
{% block contents %}

  <div class="panel panel-default">
    <div class="panel-heading"><span class="ui-jqgrid-title-icon glyphicon glyphicon-object-align-left"></span> ข้อมูลระดับ</div>
    <div class="panel-body" style="margin-left:20px">
        <div id="jqGridPager"></div>
        <table class="grid" id="jqGrid"></table>
    </div>
  </div>

{% endblock %}
