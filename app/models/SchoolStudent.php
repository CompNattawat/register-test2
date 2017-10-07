<?php

class SchoolStudent extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     * @Primary
     * @Identity
     * @Column(type="integer", length=11, nullable=false)
     */
    public $StudentID;

    /**
     *
     * @var string
     * @Column(type="string", length=4, nullable=true)
     */
    public $AdmitYear;

    /**
     *
     * @var string
     * @Column(type="string", length=32, nullable=true)
     */
    public $StudentCode;

    /**
     *
     * @var string
     * @Column(type="string", length=32, nullable=true)
     */
    public $StudentPID;

    /**
     *
     * @var integer
     * @Column(type="integer", length=11, nullable=true)
     */
    public $PrefixNameID;

    /**
     *
     * @var string
     * @Column(type="string", length=150, nullable=true)
     */
    public $FirstNameTh;

    /**
     *
     * @var string
     * @Column(type="string", length=150, nullable=true)
     */
    public $LastNameTh;

    /**
     *
     * @var string
     * @Column(type="string", length=150, nullable=true)
     */
    public $FirstNameEn;

    /**
     *
     * @var string
     * @Column(type="string", length=150, nullable=true)
     */
    public $LastNameEn;

    /**
     *
     * @var integer
     * @Column(type="integer", length=11, nullable=true)
     */
    public $CourseID;

    /**
     *
     * @var string
     * @Column(type="string", length=1, nullable=true)
     */
    public $Sex;

    /**
     *
     * @var string
     * @Column(type="string", nullable=true)
     */
    public $Birthday;

    /**
     *
     * @var string
     * @Column(type="string", nullable=true)
     */
    public $Note;

    /**
     *
     * @var string
     * @Column(type="string", length=1, nullable=false)
     */
    public $RecordStatus;

    /**
     *
     * @var string
     * @Column(type="string", nullable=true)
     */
    public $CreateDate;

    /**
     *
     * @var string
     * @Column(type="string", length=50, nullable=true)
     */
    public $CreateUser;

    /**
     *
     * @var string
     * @Column(type="string", nullable=true)
     */
    public $LastDate;

    /**
     *
     * @var string
     * @Column(type="string", length=50, nullable=true)
     */
    public $LastUser;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("example");
        $this->setSource("school_student");
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'school_student';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return SchoolStudent[]|SchoolStudent
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return SchoolStudent
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
