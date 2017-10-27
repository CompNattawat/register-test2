<?php

class MaindataController extends ControllerBase
{

    public function indexAction()
    {

    }

    public function classlevelAction()
    {
      # code...
    }

    public function getdataSchoolLevelAction()
    {
      $masclasslevel = masclasslevel::find();

      $data = json_encode($masclasslevel);
      $response = new \Phalcon\Http\Response();

      $response->setContent($data);

      return $response;
    }

    public function AddDataLevelAction()
    {
      $this->view->disable();

      $model = new masclasslevel();

      $model->ClassGroupID = $this->request->getPost('ClassGroupID');
      $model->ClassLevelNameTh = $this->request->getPost('ClassLevelNameTh');
      $model->ClassLevelNameEn = $this->request->getPost('ClassLevelNameEn');
      $model->ClassLevelSorting = $this->request->getPost('ClassLevelSorting');

      // $data->assign($array);
      $model->save();
    }

    public function EditDataLevelAction()
    {
      $this->view->disable();

      $model = new masclasslevel();

      $array = $this->request->getPost();
      $data = $model->findFirst($array['ClassLevelID']);

      $data->assign($array);
      $data->save();

    }

    public function DeleteDataLevelAction()
    {
      $this->view->disable();

      $model = new masclasslevel();

      $array = $this->request->getPost('id');

      $data = $model->findFirst($array);

      var_dump($data);
      exit();

      $data->delete();
    }

    public function classgroupAction()
    {
      # code...
    }

    public function getdataSchoolGroupAction()
    {
      $masclassgroup = masclassgroup::find();

      $data = json_encode($masclassgroup);
      $response = new \Phalcon\Http\Response();

      $response->setContent($data);

      return $response;
    }

    public function AddDataGroupAction()
    {
      $this->view->disable();

      $model = new masclassgroup();

      $model->ClassGroupID = $this->request->getPost('ClassGroupID');
      $model->ClassGroupTh = $this->request->getPost('ClassGroupTh');
      $model->ClassGroupEn = $this->request->getPost('ClassGroupEn');
      $model->ClassGroupSorting = $this->request->getPost('ClassGroupSorting');

      // $data->assign($array);
      $model->save();
    }

    public function EditDataGroupAction()
    {
      $this->view->disable();

      $model = new masclassgroup();

      $array = $this->request->getPost();
      $data = $model->findFirst($array['ClassGroupID']);

      $data->assign($array);
      $data->save();

    }

    public function DeleteDataGroupAction()
    {
      $this->view->disable();

      $model = new masclassgroup();

      $array = $this->request->getPost('id');

      $data = $model->findFirst($array);

      $data->delete();
    }



    public function subjectgroupAction()
    {
      # code...
    }

    public function getdataSubjectGroupAction()
    {
      $massubjectgroup = massubjectgroup::find();

      $data = json_encode($massubjectgroup);
      $response = new \Phalcon\Http\Response();

      $response->setContent($data);

      return $response;
    }

    public function AddDataSubjectGroupAction()
    {
      $this->view->disable();

      $model = new massubjectgroup();

      $model->SubjectGroupNameTh = $this->request->getPost('SubjectGroupNameTh');
      $model->SubjectGroupNameEn = $this->request->getPost('SubjectGroupNameEn');
      $model->SubjectGroupDetail = $this->request->getPost('SubjectGroupDetail');

      // $data->assign($array);
      $model->save();
    }

    public function EditDataSubjectGroupAction()
    {
      $this->view->disable();

      $model = new massubjectgroup();

      $array = $this->request->getPost();
      $data = $model->findFirst($array['SubjectGroupID']);

      $data->assign($array);
      $data->save();

    }

    public function DeleteDataSubjectGroupAction()
    {
      $this->view->disable();

      $model = new massubjectgroup();

      $array = $this->request->getPost('id');

      $data = $model->findFirst($array);

      $data->delete();
    }

}
