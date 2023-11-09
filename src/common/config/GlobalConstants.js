export default {
    variables: {
      //Golbal variables
      globalEmail: "info@globalinsurance.co.in",
      globalEmail2: "eb.helpdesk@globalinsurance.co.in",
      supportNumber: "1800-123-4567",
      globalLogo: "images/global-logo.png",
      globalFooterLogo: "images/img_globe_small.png",
      showNortonImg: false,
      enableGoogleAnalytics: false,
      show_footer_global_logo: false,
      show_footer_border: false,
      footer_global_logo_align: "right",
      show_footer_link_seperator: true,
      insurance_disclaimer_text: "Insurance is a subject matter of solicitation.",
      aboutUsLink: "/about-us",
      privacyLink: "/privacy-policy",
      disclaimerLink: "/disclaimer",
      tncLink: "/terms-and-conditions",
      gdpr: "/general_data_protection_regulation_GDPR",
    },
  
    companyDetails: {
      companyName: "Global Insurance Brokers Pvt. Ltd. ",
      oldCompanyName: "Aon Global Insurance Brokers Pvt. Ltd.",
      companyAddress1: "A wing, 5th Floor, One Forbes, Dr. V B Gandhi Marg,",
      companyAddress2: "Kala Ghoda, Fort,",
      companyCity: "Mumbai, Maharashtra,",
      companyPin: "400 001",
      licenseNumber: "119",
      licenseValidityFrom: "03-Mar-2021",
      licenseValidityTo: "02-Mar-2024",
      cin: "U67200MH2002PTC137954",
      copywrite: "2017-2018, Insurance Assist. All rights reserved",
      rapidSslSeal: "",
      globalLogo: require("@/assets/images/global-logo.png"),
      regulated_by_text:
        "Regulated by Insurance Regulatory and Development Authority of India, (IRDAI).",
      license_no_label: "License Number",
      license_val_label: "License Validity",
      email_label: "e-mail",
      cin_label: "CIN",
    },
  
    roleArray: ["CORPORATE_ADMIN", "LOCATION_ADMIN", "EMPLOYEE"],
    sessionChecked: false, // Flag to track if session check has been performed
    passwordExpiry: {
      passwordExpiryLimit: 60,
    },
    changePassword: false,
    passwordExpired: false,
    FIELDS_TYPE: {
      PROFILE: "my_profile_fields",
      MENU_ITEMS: "navigation_menu_fields",
      POLICY_VIEW: "policy_view_fields",
      TOPUP_VIEW: "topup_policy_view_fields",
      EMPLOYEE_DASHBOARD: "employee_dashboard_fields",
      VOLUNTARY_VOTING_SCREEN: "voluntary_voting_screen_fields",
      LIST_DEPENDENTS_SCREEN: "list_dependents_screen_fields",
    },
    USER_TYPES: {
      CORPORATE_ADMIN: "CORPORATE_ADMIN",
      LOCATION_ADMIN: "LOCATION_ADMIN",
      EMPLOYEE: "EMPLOYEE",
    },
  
    // Key names for ROLES_DISPLAY_NAMES are mapped as per the role name values coming from the API. Please DO NOT change.
    ROLES_DISPLAY_NAMES: {
      CORPORATE_ADMIN: "Corporate Admin",
      LOCATION_ADMIN: "Location Admin",
      EMPLOYEE: "Employee",
    },
  
    GLOBAL_ERROR_MSG: {
      CAPTCHA_ERR: "Error loading captcha",
    },
  
    DIALOG: {
      confirmDialogAcceptLabel: "CONFIRM",
      confirmDialogRejectLabel: "CANCEL",
      confirmDialogOkLabel: "OK",
    },
  
    GMC_MATERNITY_SUBCOVERAGE_HIDE: [
      "Normal Delivery",
      "Cesarean Delivery",
      "Maternity Waiting Period",
      "Pre & Post Natal Expenses",
      "Baby Expenses During Maternity",
    ],
  
    TOAST: {
      MESSAGES: {
        ERROR: {
          noPolicyFoundInDropDown: "No Policy Found.",
          tpaDeleteAlert:
            "You cannot delete this TPA as it is associated with corporates.",
          enterOrSelectProperEmployeeCode:
            "Please enter or select proper Employee Code.",
          tpaDeleteConfirm:
            "Are you sure you want to delete the selected TPA. Press OK to confirm delete.",
          inValidEmail: "Please Enter Valid Email!",
          thereWasAnError:
            "There Was An Unknown Error. Please Refresh Your Page!",
          companyDataUpdated:
            "Changes To Corporate Details Successfully Updated.",
          companyLogoUpdated: "Corporate Logo Successfully Updated.",
          topupDataNotAvailable: "Top-up Data Not Available For Selected Policy.",
          invalidParameters: "Invalid Parameters Passed.",
          topupAlreadySelected:
            "You Have Already Selected The Highlighted Top-up Sum Insured.",
          firstTimeLogin: "First Time Login, Please Reset Your Password.",
          invalidDomainAccess:
            "Invalid Domain Accessed. Redirecting To Correct Login Page.",
          alreadyLoggedIn: "You Are Already Logged In.",
          pleaseLogin: "Please Login.",
          sessionInvalid: "Oops! Looks Like You Are Not Logged In.",
          topupDataNotFound: "Top-up Data Not Found!",
          corpNameField:
            "Corporate Name Should Be More Than 3 Characters and Less Than 100 Characters",
          domainNameField:
            "Domain Name Should Be More Than 3 Characters and Less Than 20 Characters",
          pincodeField: "Pincode Should Have Only 6 Characters",
          mobileNoField: "Mobile Should Have Only 10 Characters",
          emailField: "Invalid Email Address",
          invalidLogin:
            "Email And Password You Have Entered Does Not Match. Please Enter Correct Login Credentials And Try Again",
          topupNoApplied: "You Have Not Applied For Any Top-up.",
          topupNotActive: "Selected Top-up Is Still Not Active.",
          oldNewPassSame: "New Password Cannot Be Same As Old Password.",
          corpAdminDeletionSuccess: "Admins Successfully Removed.",
          corpAdminNoDeletionDetected: "No Deletion Detected",
          corpAdminAdditionSuccess: "Admins Successfully Assigned.",
          noChangesDetected: "No Changes Detected.",
          noWellnessEvents: "No Event Available",
          noDependents: "No Dependents Added Yet!",
          noNominees: "No Nominees Added Yet!",
          topupCoverage: "Top-up Coverage Will Be Same As Base Policy.",
          topupSelected:
            "The above selected Top-up Sum Insured and Premium will be initiated subject to confirmation on policy placement.",
          updateNoChangesDetected: "No Changes Detected.",
          clearPolicyFields: "Are You Sure You Want To Clear?",
          cancelPolicySetup: "Are You Sure You Want To Cancel Setup?",
          upperLimitandLowerLimit:
            "Upper Limit Should Always Be Greater Than Lower Limit.",
          companyIdRequired: "Company Id Is Missing!",
          allRequiredFields: "Fill All Required Fields!",
          coverageRequired: "Select Minimum One Coverage.",
          designationLoadFail: "Problem Retriving Designation.",
          sameGrade: "Grade Can't Be Same",
          sameDescription: "Addon Description Can't Be Same",
          requiredSumInsuredFields:
            "Fill All Required Fields In Sum Insured Type!",
          requiredAddonFields: "Fill All Required Fields In Addon!",
          enrollmentStartandEndDate:
            "Enrollment end date should be after start date",
          topupListingError: "Problem Listing Top-up Policy.",
          topupPolicyNumberRequired: "Please Enter The Top Up Policy Number",
          validTopupNumber: "Enter Valid Top-up Policy Number",
          topupPolicyNumberRange: "Enter Top-up Policy Number Between 8 and 30.",
          topupStartDateRequired: "Top-up Enrollment Start Date Is Missing!",
          employeeIdRequired: "Employee Id Is Missing.",
          employeeDesignationRequired: "Employee Designation Is Missing.",
          problemFetchingPolicyDetails: "Problem In Fetching Policy Details.",
          floatTHresholdRequied: "Float Threshold Is Required!",
          dateRequired: "Date field is Required!",
          policyNumberRequired: "Enter Policy Number!",
          validPolicyNumber: "Enter Valid Policy Number!",
          policyNumberRange: "Enter Policy Number Between 8 and 30.",
          errorGettingDependents: "Error Getting Dependent List.",
          errorGettingClaimsDownload: "Error Getting Claims Settled List.",
          uploadedDependents: "Dependents Data Uploaded Successfully.",
          errorInUploadedDependents:
            "Validation Failure. Errors Found For Following Records. Please Enter Correct Data And Import Again..",
          invalidChildAge: "Child's Age Is Greater Than Employee's Age.",
          invalidParentsAge: "Parent's Age Is Less Than Employee's Age.",
          editDependentSuccessfull:
            "Your Dependent Change Request Is Subject To Approval, You Will See Updated Dependent Once The Request Is Approved By Admin.",
          editDependentFailure: "Error Updating Dependent.",
          addDependentSuccessfull:
            "Your New Dependent Request is Subject to Approval.",
          addDependentFailure: "Error Creating Dependent.",
          maxDependentsAdded: "You Cannot Add Any More Dependents.",
          maxDependentsLimitReached:
            "Maximum Family Size Reached. Cannot Add Any More Dependents!",
          addNomineeSuccessfull: "Nominee Added Successfully.",
          addNomineeFailure: "Error Adding Nominee.",
          editNomineeSuccessfull: "Nominee Updated Successfully.",
          editNomineeFailure: "Error Updating Nominee.",
          maxNomineesAdded: "Maximum Nominees Added.",
          emergContactAddedSuccess: "Contact Added Successfully.",
          emergContactAddedFailure: "Error Adding Contact.",
          editProfileSuccess: "Your Profile Update is Subject to Admin Approval.",
          editProfileFailure: "Error Updating Profile.",
          editAdminProfileSuccess: "Profile Updated Successfully.",
          editEmergContactSuccess: "Contacts Updated Successfully.",
          editEmergContactFailure: "Error Updating Contacts.",
          deleteEmergContactSuccess: "Contacts Deleted Successfully.",
          deleteEmergContactFailure: "Error Deleting Contact.",
          editIAProfileSuccess: "User Updated Successfully.",
          editIAProfileFailure: "Error Updating User.",
          addWellnessEventSuccessfull: "Event Created Successfully.",
          addWellnessEventFailure: "Error Creating Event.",
          editWellnessEventSuccessfull: "Event Updated Successfully.",
          editWellnessEventFailure: "Error Updating Event.",
          deleteWellnessEventSuccessfull: "Event Cancelled Successfully.",
          deleteWellnessEventFailure: "Error Cancelling Event.",
          invalidEventEndDate:
            "Event End Date Has To Be Equal To Or Greater Than Start Date.",
          invalidEventEndTime: "Please Select A Valid Event End Time.",
          invalidActivityEndDate:
            "Activity End Date Has To Be Equal To Or Greater Than Start Date.",
          invalidActivityEndTime: "Please Select A Valid Activity End Time.",
          invalidSpouseAge: "Spouse Cannot Be A Minor.",
          importMasterNoFileSelected: "No File Selected",
          importMasterFailedExcelUpload:
            "Something Went Wrong When Uploading Excel To Server!",
          importMasterValidationFailure:
            "Validation Failure. Errors Found For Following Records. Please Enter Correct Data And Import Again.",
          importMasterMoveToNextError:
            "You Cannot Move To Next Unless Data Is Uploaded Or Skip If Data Already Exists!",
          importMasterJsonDataUploadFailure: "Error Uploading JSON Data!",
          importMasterJsonDataUploadDuplicateFailure:
            "Error Uploading JSON Data! Duplicate Data Found!",
          importListMasterError: "Error Listing IA Master Data!",
          iaBranchListError: "Error Listing IA Branches!",
          iaBranchEditError: "Error Updating IA Branch!",
          iaBranchNotExists: "Selected IA Branch Does Not Exits!",
          iaBranchError: "Error Creating IA Branch!",
          iaAdminListError: "Error Listing IA Admin!",
          iaAdminEditError: "Error Updating IA Admin!",
          iaAdminDeleteError: "Error Deleting IA Admin!",
          iaExecDeleteError: "Error Deleting IA Executive!",
          iaAdminNotExists: "Selected IA Admin Does Not Exits!",
          iaAdminError: "Error Creating IA Admin!",
          iaExecListError: "Error Listing IA Executive!",
          iaExecEditError: "Error Updating IA Executive!",
          iaExecNotExists: "Selected IA Executive Does Not Exits!",
          iaExecError: "Error Creating IA Executive!",
          errorGettingHelpdesk: "Error Getting Helpdesk Details!",
          validLandline: "Enter Valid Landline No",
          selectedTopupIsActive:
            "Top-up is already active. You Have Selected The Highlighted Top-up Sum Insured.",
          relationError: "Please Update Marital Status In Profile.",
          requiredRidersFields: "Fill All Required Fields In Rider!",
          noVerificationCutOffDays: "Unable To Get Verification Cut Off Days",
          unableToGetEmployeesPolicyDetails: "Unable to get policy details",
          contactLocalHr:
            "You Can Contact Your Local Admin (Details Available Under <b><i>Profile</i></b>)",
          contactGlobalhelpdesk:
            'Alternately You Can Contact Global At <a href="mailto:%helpdeskEmail%">%helpdeskEmail%</a>.',
          invalidTPAId: "Invalid TPA ID!",
          noDeleteInsurerData: "Select Atleast One Policy Type To Delete",
          invalidTopupEndDate:
            "Top-up End Date Has To Be Equal To Or Greater Than Start Date.",
          noGTLPolicySet: "No GTL policy is setup!",
          disableAddRelation: "No More Relations To Add!",
          requiredFamilyDefinitionFields:
            "Fill All Required Fields In Family Definition!",
          invalidWindowEndDate:
            "Window Period End Date Has To Be Equal To Or Greater Than Start Date.",
          noPolicySelected: "Select Atleast One Policy Type For Mapping.",
          noPolicySetup: "No Policies Setup",
          topupEndorsementDateRequired:
            "Top-up Endorsement Last Date Is Missing.",
          windowPeriodExpired:
            "Window Period Extension Is Not Allowed After The Window Period End Date.",
          topupEndorsementDateRangeValidation:
            "Topup Endorsement Last Date Should Be Between Topup Policy Start Date And End Date.",
          cannotEmptyFieldMessage: "Cannot Empty Existing Filled Fields.",
          deleteDependentSuccessful:
            "Your Delete Dependent Request is Subject to Approval.",
          empWindowPeriodEndDateExpired:
            "Window Period Is Closed. Please Contact Admin.",
          empWindowPeriodStartDateInfo:
            "Window Period Is Not Started Yet. You Can Add Dependents/ Edit Profile After Window Period Starts.",
          cannotUpdateTopupEndDate:
            "Cannot Update Enrollment End Date As Top-up Is Activated.",
          topupEndDateExpired:
            "Cannot Update As Enrollment End Date Has Already Expired.",
          noTopupSetup: "No Top-up Available For Voting.",
          unableToFetchEmpData: "Unable To Fetch Employee Details",
          pendingDependentApprovalMsg:
            "Kindly Note That Addition/Modification/Deletion Of Dependent Record Requested By You Is Subject To Your Corporate Admin Approval And Followed By Endorsement From The Insurance Company",
          unAuthorizedAccessMsg: "You Are Not Authorized To Access.",
          premiumHintText: "Please Enter Premium Without Tax",
          topupWithoutPremiumSelected:
            "The above selected Top-up Sum Insured will be initiated subject to confirmation on policy placement.",
          noPolicyEndDate:
            "Policy End Date Not Available, You Are Not Allowed To Create A New Activity",
          gstNoChanges: "No changes detected.",
          policyTypeRequired: "Please Select a Policy Type",
          updateChangeReason: "Please Update Reason For Change",
          dashoboardDropDownSelection: "Please select atleast one value.",
          insuranceAlreadySelected: "Insurance Company Already Selected",
          coInsuredReqd: "Please Fill Co-Insured Details",
          erroLoadingMaster: "Error loading Master!",
          familyDefnReqd:
            "Family Definition Is Mandatory When Employee Is Not Included!",
          cannotAddMoreGrades:
            "Cannot Add More Grades As Master List Is Already Selected!",
          invalidDocUploadErr: "Please upload a valid file!",
          policyNotExpired: "Policy is not expired, you cannot renew a policy!",
          pendingBatchesAvailable:
            "You cannot renew a policy until there are any pending batches available to send for endorsement",
          errorFetchingComp: "Error Getting Insurance Companies!",
          noBranch: "No Branch Found. Please Select Another Insurance Company!",
          sumOfInsurerShare: "Sum Of Insurer Share Percentage Should Be 100%",
          duplicateRelation: "Duplicate Relations Not Allowed",
          circularDependecy: "Circular dependency detected!",
          relationAlreadySelected: "This relation is already selected!",
          unableToConnectEmpDB: "Unable to Get Employee DOB!",
        },
        SUCCESS: {
          maintenanceActivity: "Activity Created Successfully",
          policySetup: "Policy Setup Successful",
          updateSalary: "Salary Updated Successfully",
          policyMapped: "Policy Successfully Mapped.",
          policyDocUpload: "Policy Documents Uploaded Successfully!",
          importMasterJsonDataUploadSuccess: "Data Uploaded Successfully!",
          importMasterValidationSuccess:
            "Validation Successful. No Errors Found. Please Proceed With Upload.",
          iaBranchEditSuccess: "IA Branch Updated Successfully!",
          wellnessEditSuccess: "wellness Partner Updated Successfully!",
          iaBranchSuccess: "IA Branch Created Successfully!",
          iaAdminEditSuccess: "IA Admin Updated Successfully!",
          iaAdminDeleteSuccess: "IA admin deleted successfully!",
          iaExecDeleteSuccess: "IA Executive Deleted Successfully!",
          iaAdminSuccess: "IA Admin Created Successfully!",
          iaExecSuccess: "IA executive created successfully!",
          iaExecEditSuccess: "IA executive updated successfully!",
          enrollmentSuccessfull: "Settings Updated Successfully!",
          dependentConfirmation:
            "Please ensure you have entered correct details and click the Confirm button. Once you confirm, the addition/modification request will go to your Admin for approval.",
          floatAccountReplenishSuccess: "Float Account Replenish Successful.",
          windowPeriodExtSuccess: "Window Period Extended Successfully!",
          uploadedCustom: "Custom Data Uploaded Successfully.",
          synchedIASuperAdminDataWithSwipez:
            "Global Super Admin Data Synched Successfully",
          synchedIAAdminDataWithSwipez: "Global Admin Data Synched Successfully",
          synchedIAExecutiveDataWithSwipez:
            "Global Executive Data Synched Successfully",
          synchedCorporateDataWithSwipez:
            "Corporate Information Synched Successfully",
          approvalOnAddDependentMsg: "Your Dependent Is Added Successfully",
          approvalOnEditDependentMsg: "Your Dependent Is Edited Successfully",
          approvalOnDeleteDependentMsg: "Your Dependent Is Deleted Successfully",
          approvalOnDependentConfirmation:
            "Please ensure you have entered correct details and click the Confirm button.",
          approvalOnProfileEdit: "Your Profile Is Edited Successfully",
          requestSuccess: "Successfully processed the request",
          gpaRequestSuccess: "policy added Successfully",
          passwordChanged: "Password Succesfully Changed!",
          editIAProfileSuccess: "User Updated Successfully.",
          logoUpdate: "Logo successfully updated.",
          TpaDeleteSuccess: "TPA deleted successfully",
          wellnessPartnerDeleteSuccess: "wellness partner deleted successfully",
          InsurerDeleteSuccess: "Insurer deleted successfully!",
          rssFeedDeleteSuccess: "RSS Feed Deleted Successfully",
          wellnessEventDeleteSuccess: "Event Deleted Successfully",
          wellnessPatnerSuccess: "wellness Partner Created Successfully!",
          generateBatchSuccess: "generate Batch Successfully!",
          enrollBatchSuccess: "Enroll Batch Successfully!",
          topupOptionSetupSuccessful: "Top-up Option Setup Successful.",
        },
        INFO: {
          noRelationsAdded: "No Relations Added In Family Definition!",
          addAlternateRelation: "Please Add An Alternate Relation!",
          pleaseaAddRelation: "Please Add A Relation!!",
          allRelationsAlreadySelected: "All Relations Already Selected !",
          minMaxReqd:
            "Minimum And Maximum Age Necessary For Age Limit Or Exception!",
        },
      },
      DURATION: 8000,
      SEVERITY: {
        SUCCESS: "success",
        INFO: "info",
        ERROR: "error",
      },
    },
    REGEX_PATTERNS: {
      MOBILE_REG: /^[6-9]\d{9}$/,
      LANDLINE_REG: /^(\d{9}|\d{10})$/,
      EMAIL:
        /^(?=.{1,256}$)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/,
      EMAIL_PROFILE:
        /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
      EMAIL_PROFILE_NEW:
        /^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/,
      ONLY_ALPHABET: /^[A-Za-z]+$/,
      ONLY_NUMBERS: /^[0-9.]+$/,
      // WEBSITE: /^((https?:\/\/)?(www\.)?(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/i,
      WEBSITE: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,}(\/\S*)?$/,
      ALPHA_NUMERIC: /^[a-zA-Z0-9 ]+$/,
      ALPHABET_CHECK: /^[A-Za-z ]+$/,
      DATE_DDMMYYYY: /^(0?[1-9]|[1-2]\d|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/, // to check 'dd/mm/yyyy' format dates
      POLICY_NUMBER: /^[ A-Za-z0-9/\-:]*$/,
    },
    COUNTRY_CODE: {
      INDIA: "+91",
    },
    freshdesk_sos: {
      freshdesk_secret: "19cc043c32df90710a822e44e9707859",
      freshdesk_base_url: "http://ebhelpdesk.globalinsurance.co.in/",
    },
    voluntaryFamilyRelations: [
      {
        key: "spouse",
        order: 1,
        value: "Spouse",
        display: "Spouse",
        isCovered: "isSpouseAllowed",
      },
      {
        key: "spouse2",
        order: 2,
        value: "Spouse2",
        display: "Spouse2",
        isCovered: "isSpouse2Allowed",
      },
      {
        key: "spouse3",
        order: 3,
        value: "Spouse3",
        display: "Spouse3",
        isCovered: "isSpouse3Allowed",
      },
      {
        key: "child1",
        order: 4,
        value: "Child1",
        display: "Child1",
        isCovered: "isChild1Allowed",
      },
      {
        key: "child2",
        order: 5,
        value: "Child2",
        display: "Child2",
        isCovered: "isChild2Allowed",
      },
      {
        key: "child3",
        order: 6,
        value: "Child3",
        display: "Child3",
        isCovered: "isChild3Allowed",
      },
      {
        key: "child4",
        order: 7,
        value: "Child4",
        display: "Child4",
        isCovered: "isChild4Allowed",
      },
      {
        key: "child5",
        order: 8,
        value: "Child5",
        display: "Child5",
        isCovered: "isChild5Allowed",
      },
      {
        key: "child6",
        order: 9,
        value: "Child6",
        display: "Child6",
        isCovered: "isChild6Allowed",
      },
      {
        key: "sibling1",
        order: 16,
        value: "Sibling1",
        display: "Sibling1",
        isCovered: "isSibling1Allowed",
      },
      {
        key: "sibling2",
        order: 17,
        value: "Sibling2",
        display: "Sibling2",
        isCovered: "isSibling2Allowed",
      },
      {
        key: "other",
        order: 18,
        value: "Other",
        display: "Other",
        isCovered: "isOtherAllowed",
      },
      {
        key: "father",
        order: 11,
        value: "Father",
        isCovered: "isParentsAllowed",
      },
      {
        key: "mother",
        order: 10,
        value: "Mother",
        isCovered: "isParentsAllowed",
      },
      {
        key: "fatherinlaw",
        order: 13,
        value: "Father In Law",
        isCovered: "isInLawsAllowed",
      },
      {
        key: "motherinlaw",
        order: 12,
        value: "Mother In Law",
        isCovered: "isInLawsAllowed",
      },
      {
        key: "parents",
        order: 14,
        value: "Parents",
        isCovered: "isParentsAllowed",
      },
      {
        key: "parentsinlaw",
        order: 15,
        value: "Parents-in-law",
        isCovered: "isInLawsAllowed",
      },
      {
        key: "partner",
        order: 16,
        value: "Partner",
        isCovered: "isPartnerAllowed",
      },
    ],
    familyRelations: [
      {
        key: "spouse",
        value: "Spouse",
        display: "Spouse",
        isCovered: "isSpouseAllowed",
      },
      {
        key: "spouse2",
        value: "Spouse2",
        display: "Spouse2",
        isCovered: "isSpouse2Allowed",
      },
      {
        key: "spouse3",
        value: "Spouse3",
        display: "Spouse3",
        isCovered: "isSpouse3Allowed",
      },
      {
        key: "child1",
        value: "Child1",
        display: "Child1",
        isCovered: "isChild1Allowed",
      },
      {
        key: "child2",
        value: "Child2",
        display: "Child2",
        isCovered: "isChild2Allowed",
      },
      {
        key: "child3",
        value: "Child3",
        display: "Child3",
        isCovered: "isChild3Allowed",
      },
      {
        key: "child4",
        value: "Child4",
        display: "Child4",
        isCovered: "isChild4Allowed",
      },
      {
        key: "child5",
        value: "Child5",
        display: "Child5",
        isCovered: "isChild5Allowed",
      },
      {
        key: "child6",
        value: "Child6",
        display: "Child6",
        isCovered: "isChild6Allowed",
      },
      {
        key: "sibling1",
        value: "Sibling1",
        display: "Sibling1",
        isCovered: "isSibling1Allowed",
      },
      {
        key: "sibling2",
        value: "Sibling2",
        display: "Sibling2",
        isCovered: "isSibling2Allowed",
      },
      {
        key: "parents",
        value: "Parents",
        display: "Per Parent",
        isCovered: "isParentsAllowed",
      },
      {
        key: "inlaws",
        value: "Parents-In-Law",
        display: "Per Parent In Law",
        isCovered: "isInLawsAllowed",
      },
      {
        key: "child_or_sibling_1",
        value: "Child / Sibling 1",
        display: "Child / Sibling 1",
        isCovered: "isChild_Or_Sibling_1Allowed",
      },
      {
        key: "child_or_sibling_2",
        value: "Child / Sibling 2",
        display: "Child / Sibling 2",
        isCovered: "isChild_Or_Sibling_2Allowed",
      },
      {
        key: "child_or_sibling_3",
        value: "Child / Sibling 3",
        display: "Child / Sibling 3",
        isCovered: "isChild_Or_Sibling_3Allowed",
      },
      {
        key: "child_or_father",
        value: "Child / Father",
        display: "Child / Father",
        isCovered: "isChild_Or_FatherAllowed",
      },
      {
        key: "child_or_mother",
        value: "Child / Mother",
        display: "Child / Mother",
        isCovered: "isChild_Or_MotherAllowed",
      },
      {
        key: "other",
        value: "Other",
        display: "Other",
        isCovered: "isOtherAllowed",
      },
      {
        key: "partner",
        value: "Partner",
        display: "Partner",
        isCovered: "isPartnerAllowed",
      },
    ],
    additionalRelationsForDisplay: [
      { key: "father", value: "Father", isCovered: "isParentsAllowed" },
      { key: "mother", value: "Mother", isCovered: "isParentsAllowed" },
      {
        key: "fatherinlaw",
        value: "Father In Law",
        isCovered: "isInLawsAllowed",
      },
      {
        key: "motherinlaw",
        value: "Mother In Law",
        isCovered: "isInLawsAllowed",
      },
    ],
    fileMimeType: {
      pdf: "application/pdf",
      xls: "application/vnd.ms-excel",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      doc: "application/msword",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ppt: "application/vnd.ms-powerpoint",
      pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      jpeg: "image/jpeg",
      jpg: "image/jpeg",
      svg: "image/svg+xml",
      png: "image/png",
    },
    salaryMultiplier: {
      lowerLimit: 1,
      upperLimit: 200,
      difference: 0.5,
    },
    FAMILY_RELATIONSHIP: [
      {
        key: "spouse",
        value: "Spouse",
        display: "Spouse",
        isCovered: "isSpouseAllowed",
      },
      {
        key: "spouse2",
        value: "Spouse2",
        display: "Spouse2",
        isCovered: "isSpouse2Allowed",
      },
      {
        key: "spouse3",
        value: "Spouse3",
        display: "Spouse3",
        isCovered: "isSpouse3Allowed",
      },
      {
        key: "child1",
        value: "Child1",
        display: "Child1",
        isCovered: "isChild1Allowed",
      },
      {
        key: "child2",
        value: "Child2",
        display: "Child2",
        isCovered: "isChild2Allowed",
      },
      {
        key: "child3",
        value: "Child3",
        display: "Child3",
        isCovered: "isChild3Allowed",
      },
      {
        key: "child4",
        value: "Child4",
        display: "Child4",
        isCovered: "isChild4Allowed",
      },
      {
        key: "child5",
        value: "Child5",
        display: "Child5",
        isCovered: "isChild5Allowed",
      },
      {
        key: "child6",
        value: "Child6",
        display: "Child6",
        isCovered: "isChild6Allowed",
      },
      {
        key: "sibling1",
        value: "Sibling1",
        display: "Sibling1",
        isCovered: "isSibling1Allowed",
      },
      {
        key: "sibling2",
        value: "Sibling2",
        display: "Sibling2",
        isCovered: "isSibling2Allowed",
      },
      {
        key: "parents",
        value: "Parents",
        display: "Per Parent",
        isCovered: "isParentsAllowed",
      },
      {
        key: "inlaws",
        value: "Parents-In-Law",
        display: "Per Parent In Law",
        isCovered: "isInLawsAllowed",
      },
      {
        key: "child_or_sibling_1",
        value: "Child / Sibling 1",
        display: "Child / Sibling 1",
        isCovered: "isChild_Or_Sibling_1Allowed",
      },
      {
        key: "child_or_sibling_2",
        value: "Child / Sibling 2",
        display: "Child / Sibling 2",
        isCovered: "isChild_Or_Sibling_2Allowed",
      },
      {
        key: "child_or_sibling_3",
        value: "Child / Sibling 3",
        display: "Child / Sibling 3",
        isCovered: "isChild_Or_Sibling_3Allowed",
      },
      {
        key: "child_or_father",
        value: "Child / Father",
        display: "Child / Father",
        isCovered: "isChild_Or_FatherAllowed",
      },
      {
        key: "child_or_mother",
        value: "Child / Mother",
        display: "Child / Mother",
        isCovered: "isChild_Or_MotherAllowed",
      },
      {
        key: "other",
        value: "Other",
        display: "Other",
        isCovered: "isOtherAllowed",
      },
      {
        key: "partner",
        value: "Partner",
        display: "Partner",
        isCovered: "isPartnerAllowed",
      },
    ],
    CAPTCHA: {
      isEnabled: true,
      enabledForIaUsers: true,
      enabledForCorpUsers: true,
      googleRecaptchaEnabled: false,
      svgCaptchaEnabled: true,
      googleCaptchaKey: "6Lf12CQTAAAAAIm-RreMVDV3ETaK6PbrU4FIWP3M",
    },
    gpaAddons: {
      featureArray: [
        "Accidental Death",
        "Accidental Medical Expenses",
        "Accidental Permanent Total Disablement ",
        "Accidental Permanent Partial Disablement",
        "Accidental Temporary Total Disablement",
        "Child education support",
        "Daily allowance",
        "Terrorism",
        "24 hours & Worldwide Cover",
      ],
      addonArray: [
        "Adventure Sports",
        "Ambulance Hiring Charges",
        "Burn Disability",
        "Funeral Expenses Benefits",
        "Life Support Benefits",
        "Transportation of Mortal Remains",
      ],
    },
    gmcClaimsChartMessage: {
      jet: {
        default: "",
        graded: {
          "Grade 1": {
            msg:
              "<ul class='note-warning-font'>" +
              "<li>Employee, Spouse and Children Sum Insured is restricted to INR 400,000 within overall family Sum Insured Limit of INR 600,000</li>" +
              "<li>Parental Sum Insured is restricted to INR 400,000 within overall family Sum Insured Limit of INR 600,000</li>" +
              "</ul>",
          },
          "Grade 2": {
            msg:
              "<ul class='note-warning-font'>" +
              "<li>Employee, Spouse and Children Sum Insured is restricted to INR 700,000 within overall family Sum Insured Limit of INR 10,00,000</li>" +
              "<li>Parental Sum Insured is restricted to INR 500,000 within overall family Sum Insured Limit of INR 10,00,000</li>" +
              "</ul>",
          },
          "Grade 3": {
            msg: "",
          },
        },
      },
      jetairwaysstaff1: {
        default: "",
        graded: {
          "Grade 2": {
            msg:
              "<ul class='note-warning-font'>" +
              "<li>Employee, Spouse and Children Sum Insured is restricted to INR 400,000 within overall family Sum Insured Limit of INR 600,000</li>" +
              "<li>Parental Sum Insured is restricted to INR 400,000 within overall family Sum Insured Limit of INR 600,000</li>" +
              "</ul>",
          },
        },
      },
      jetairways: {
        default: "",
        graded: {
          "Grade 1": {
            msg:
              "<ul class='note-warning-font'>" +
              "<li>Employee, Spouse and Children Sum Insured is restricted to INR 700,000 within overall family Sum Insured Limit of INR 10,00,000</li>" +
              "<li>Parental Sum Insured is restricted to INR 500,000 within overall family Sum Insured Limit of INR 10,00,000</li>" +
              "</ul>",
          },
        },
      },
      dupont: {
        default: "",
        graded: {
          A: {
            msg:
              "<ul class='note-warning-font'>" +
              "<li>Family Floater Sum Insured for Self, Spouse and 2 Children of INR 500,000</li>" +
              "<li>Parents or In Laws with separate floater of INR 300,000 (Premium to be borne by employee)</li>" +
              "<li>3rd and 4th Child within the 5,00,000 family floater (Premium to be borne by employee)</li>" +
              "</ul>",
          },
        },
      },
      corteva: {
        default: "",
        graded: {
          A: {
            msg:
              "<ul class='note-warning-font'>" +
              "<li>Family Floater Sum Insured for Self, Spouse and 2 Children of INR 500,000</li>" +
              "<li>Parents or In Laws with separate floater of INR 300,000 (Premium to be borne by employee)</li>" +
              "<li>3rd and 4th Child within the 5,00,000 family floater (Premium to be borne by employee)</li>" +
              "</ul>",
          },
        },
      },
    },
    claims_relation_mapping: {
      Self: ["employee"],
      Child: ["child1", "child2", "child3", "child4", "child5", "child6"],
      Parent: [
        "parents",
        "inlaws",
        "father",
        "mother",
        "fatherinlaw",
        "motherinlaw",
      ],
      Spouse: ["spouse", "spouse2", "spouse3"],
      Others: [
        "sibling1",
        "sibling2",
        "child_or_sibling_1",
        "child_or_sibling_2",
        "child_or_sibling_3",
        "child_or_father",
        "child_or_mother",
        "other",
        "partner",
      ],
    },
    mappedKeys: [
      { key: "first_name", fetchKeyName: "dependantFirstName" },
      { key: "last_name", fetchKeyName: "dependantLastName" },
      { key: "gender", fetchKeyName: "dependantGender" },
      { key: "dob", fetchKeyName: "dependantDOB" },
      { key: "mobile", fetchKeyName: "dependantMobile" },
      { key: "email", fetchKeyName: "dependantEmail" },
      { key: "state", fetchKeyName: "dependantState" },
      { key: "city", fetchKeyName: "dependantCity" },
      { key: "relation", fetchKeyName: "dependantRelation" },
      { key: "age", fetchKeyName: "dependantsAge" },
      { key: "birthByAge", fetchKeyName: "dependentBirthByAge" },
      { key: "dependantID", fetchKeyName: "dependantID" },
    ],
    voluntaryEmployeeMaritalStatusNotAllowedRelation: {
      single: ["spouse", "spouse2", "spouse3", "fatherinlaw", "motherinlaw"],
      divorced: ["spouse", "spouse2", "spouse3", "fatherinlaw", "motherinlaw"],
      married: ["sibling", "sibling1", "sibling2"],
      single_parent: [
        "spouse",
        "spouse2",
        "spouse3",
        "fatherinlaw",
        "motherinlaw",
      ],
      separated: ["spouse", "spouse2", "spouse3", "fatherinlaw", "motherinlaw"],
      widow: ["spouse", "spouse2", "spouse3"],
      widower: ["spouse", "spouse2", "spouse3"],
      widowed: ["spouse", "spouse2", "spouse3"],
      live_in: ["spouse", "spouse2", "spouse3"],
      lgbt: [
        "spouse",
        "spouse2",
        "spouse3",
        "child1",
        "child2",
        "child3",
        "child4",
        "child5",
        "child6",
        "fatherinlaw",
        "motherinlaw",
      ],
      lgbtq: [
        "spouse",
        "spouse2",
        "spouse3",
        "child1",
        "child2",
        "child3",
        "child4",
        "child5",
        "child6",
        "fatherinlaw",
        "motherinlaw",
      ],
    },
    employeeMaritalStatusNotAllowedRelation: {
      single: ["spouse", "spouse2", "spouse3", "fatherinlaw", "motherinlaw"],
      married: ["sibling1", "sibling2"],
      divorced: ["spouse", "spouse2", "spouse3", "fatherinlaw", "motherinlaw"],
      separated: [],
    },
    childSiblingAgeLimitArray: [
      "child1",
      "child2",
      "child3",
      "child4",
      "child5",
      "child6",
      "sibling1",
      "sibling2",
      "child_or_sibling_1",
      "child_or_sibling_2",
      "child_or_sibling_3",
    ],
    claimsData: [
      {
        header: "Claim Details",
        keys: [
          {
            dbName: "insurance_company_name",
            fieldName: "Insurance Company Name",
            isHighlighted: false,
          },
          {
            dbName: "employee_name",
            fieldName: "Employee Name",
            isHighlighted: false,
          },
          {
            dbName: "client_name",
            fieldName: "Client Name",
            isHighlighted: false,
          },
          {
            dbName: "patient_name",
            fieldName: "Patient Name",
            isHighlighted: false,
          },
          {
            dbName: "relation",
            fieldName: "Relationship",
            isHighlighted: false,
          },
          {
            dbName: "date_of_birth",
            fieldName: "Date of Birth",
            isHighlighted: false,
          },
          {
            dbName: "employee_number",
            fieldName: "Employee Number",
            isHighlighted: false,
          },
          {
            dbName: "policy_start_date",
            fieldName: "Policy Start Date",
            isHighlighted: false,
          },
          {
            dbName: "policy_end_date",
            fieldName: "Policy End Date",
            isHighlighted: false,
          },
          {
            dbName: "patient_age",
            fieldName: "Patient Age (Years)",
            isHighlighted: false,
          },
          {
            dbName: "patient_gender",
            fieldName: "Patient Gender",
            isHighlighted: false,
          },
          {
            dbName: "policy_number",
            fieldName: "Policy Number",
            isHighlighted: false,
          },
          {
            dbName: "tpa_name",
            fieldName: "TPA Name",
            isHighlighted: false,
          },
          {
            dbName: "tpa_grade",
            fieldName: "TPA Grade",
            isHighlighted: false,
          },
          {
            dbName: "unit_name",
            fieldName: "Unit Name",
            isHighlighted: false,
          },
        ],
      },
      {
        header: "Claim Registration",
        keys: [
          {
            dbName: "hospitalType",
            fieldName: "Hospital Type",
            isHighlighted: false,
          },
          {
            dbName: "hospital_name",
            fieldName: "Hospital Name",
            isHighlighted: false,
          },
          {
            dbName: "date_of_admission",
            fieldName: "Date of Admission",
            isHighlighted: false,
          },
          {
            dbName: "date_of_discharge",
            fieldName: "Date of Discharge",
            isHighlighted: false,
          },
          {
            dbName: "ailment",
            fieldName: "Ailment",
            isHighlighted: false,
          },
          {
            dbName: "diagnosis_procedure",
            fieldName: "Diagnosis Procedure",
            isHighlighted: false,
          },
          {
            dbName: "hospital_city",
            fieldName: "Hospital City",
            isHighlighted: false,
          },
          {
            dbName: "hospital_state",
            fieldName: "Hospital State",
            isHighlighted: false,
          },
          {
            dbName: "claims_as_on_date",
            fieldName: "Claims as on date",
            isHighlighted: false,
          },
          {
            dbName: "claims_rcvd_dt_head",
            fieldName: "Claim Received Date - Head Office",
            isHighlighted: false,
          },
          {
            dbName: "claims_rcvd_dt_branch",
            fieldName: "Claim Received Date - Branch",
            isHighlighted: false,
          },
          {
            dbName: "claims_doc_submission_date",
            fieldName: "Claims Document Submission Date",
            isHighlighted: false,
          },
          {
            dbName: "claim_type",
            fieldName: "Claim Type",
            isHighlighted: false,
          },
          {
            dbName: "claim_number",
            fieldName: "Claim Number",
            isHighlighted: false,
          },
          {
            dbName: "claim_amount",
            fieldName: "Claim Amount",
            isHighlighted: false,
          },
          {
            key: "room_type",
            fieldName: "Room Type",
            isHighlighted: false,
          },
          {
            dbName: "icd_code",
            fieldName: "ICD Code",
            isHighlighted: false,
          },
        ],
      },
      {
        header: "Claim Processing",
        keys: [
          {
            dbName: "claim_status",
            fieldName: "Claim Status",
            isHighlighted: false,
          },
          {
            dbName: "claims_approval_rcvd_date",
            fieldName: "Claim Approval Received Date",
            isHighlighted: false,
          },
          {
            dbName: "claims_calc_date",
            fieldName: "Claims Calculation Date",
            isHighlighted: false,
          },
          {
            dbName: "claims_pending_date",
            fieldName: "Claims Pending Date (Approval Asked Date)",
            isHighlighted: false,
          },
          {
            dbName: "deficiency_intimation_date",
            fieldName: "Deficiency Intimation Date",
            isHighlighted: false,
          },
          {
            dbName: "deficiency_received_date",
            fieldName: "Deficiency Received Date",
            isHighlighted: false,
          },
          {
            dbName: "hospitalization_charges",
            fieldName: "Hospitalization Charges",
            isHighlighted: false,
          },
          {
            dbName: "other_charges_approved",
            fieldName: "Other Charges Approved",
            isHighlighted: false,
          },
          {
            dbName: "settled_amount",
            fieldName: "Settled Amount",
            isHighlighted: false,
          },
          {
            dbName: "other_charges",
            fieldName: "Other Charges",
            isHighlighted: false,
          },
          {
            dbName: "sum_insured_amount",
            fieldName: "Sum Insured Amount",
            isHighlighted: false,
          },
  
          {
            dbName: "deficiency_raised_date",
            fieldName: "Deficiency Raised Date",
            isHighlighted: false,
          },
          {
            dbName: "denail_reason",
            fieldName: "Rejected Reason",
            isHighlighted: false,
          },
          {
            dbName: "outstanding_claim_status",
            fieldName: "Outstanding Claim Status",
            isHighlighted: false,
          },
          {
            dbName: "sanctioned_amount",
            fieldName: "Sanctioned Amount",
            isHighlighted: false,
          },
          {
            dbName: "disallowances_details",
            fieldName: "Disallowances Details",
            isHighlighted: false,
          },
        ],
      },
      {
        header: "Payment",
        keys: [
          {
            dbName: "cheque_dispatched_date",
            fieldName: "Cheque dispatch date",
            isHighlighted: false,
          },
          {
            dbName: "amount",
            fieldName: "Amount",
            isHighlighted: false,
          },
        ],
      },
    ],
    fhplVoluntaryIntegration: ["thermo", "invitrogen"],
    bajajAllianzEnabledCsd: [
      "amdocs",
      "amdocs1",
      "amdocs2",
      "amdocs3",
      "amdocs4",
    ],
  };
  