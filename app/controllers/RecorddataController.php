<?php

class RecorddataController extends ControllerBase
{

    public function indexAction()
    {

    }

    public function studentdataAction()
    {
      # code...
    }

    public function getStudentDataAction()
    {
      $schoolstudent = schoolstudent::find();
      $prefixname = masprefixname::find();

      // $data = json_encode($schoolstudent);
      // $data2 = json_encode($prefixname);

      foreach ($schoolstudent as $key) {
        $data[] = $key->toArray();
      }

      foreach ($prefixname as $key) {
        $data2[] = $key->toArray();
      }

      $fulldata = array();
      // $studentid = array();
      // $addmityear = array();
      // $StudentCode = array();
      $fullnameth = array();
      $fullnameen = array();
      // $courseid = array();
      $sex = array();
      // $birthday = array();

      foreach ($data as $key => $value) {
        foreach ($data2 as $key => $value2) {
          if ($value['PrefixNameID']==$value2['PrefixNameID']) {
            array_push($fullnameth , ["fullnameth"=>$value2['PrefixNameTh'].$value['FirstNameTh'].' '.$value['LastNameTh']]);
            array_push($fullnameen , ["fullnameen"=>$value2['PrefixNameEn'].$value['FirstNameEn'].' '.$value['LastNameEn']]);
          }
        }
        if ($value['Sex']=='M') {
          array_push($sex , ["fullsex"=>'ชาย']);
        }else {
          array_push($sex, ["fullsex"=>'หญิง']);
        }

      }

      array_push($fulldata, $data, $fullnameth, $fullnameen, $sex);


      $response = new \Phalcon\Http\Response();

      $result = json_encode($schoolstudent);

      $response->setContent($result);

      return $response;
    }

    public function EditStudentDataAction()
    {
      $this->view->disable();

      $model = new schoolstudent();

      $array = $this->request->getPost();
      // $array = array(
      //     'username' => $this->request->getPost("username"),
      //     'password' => $this->request->getPost("password"),
      // );
      $data = $model->findFirst($array['id']);

      $data->assign($array);
      $data->save();

    }


}
