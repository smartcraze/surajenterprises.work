import { CreateProjectsForm } from "@/components/CreateProjectsForm";
import ListProjects from "@/components/ListProjects";
import { SearchInput } from "@/components/Searchbar";


export default function AdminPage() {
        console.log("from admin page");

    return (
        <div>
            <CreateProjectsForm />
            <ListProjects />
            <SearchInput />
            
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