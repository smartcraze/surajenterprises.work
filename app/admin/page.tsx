
import { CreateProjectsForm } from "@/components/CreateProjectsForm";
import ListProjects from "@/components/ListProjects";

export default function AdminPage() {
        console.log("from admin page");

    return (
        <div>
            <h1>Admin Page</h1>
            <CreateProjectsForm />
            <ListProjects />
            {/* <CreateLabourAccountForm /> */}
            {/* <GenerateReports /> */}
            {/* <GeneratePDFs /> */}
        </div>
    )
}


/* 
      create projects
         add money to labour account
         generate reports
         generate pdfs of all transactions

     
*/