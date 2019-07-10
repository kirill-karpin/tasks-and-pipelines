__Task context__ 
 
Our users want to create __​Tasks__ ​and combine them in a __​Pipeline​__. Tasks can be created and combined by different users, but only users that create a Task / Pipeline them can edit / delete it. 
 A task contains two domain properties a ​Name ​and the ​AverageTime ​it takes to run. 
 Users combine Tasks in a Pipeline which has a user given Name. You can assume that pipeline has no branches (only one branch), and if it helps assume also no repetitions of tasks. An example pipeline is shown next:  
 
>__T1 -> T2 -> T3 -> T4__ 
 
>__[Calculate Average Time] [Run Pipeline]__ 
 
Once the pipeline is created, users wants to do two things: 
 
1. Calculate the average time it takes, using average time of tasks. 
2. Run the pipeline and store its run time. 


__Task Requirements__ 
 
Design a simple Vue.js program with a Node.js in JavaScript (ideally using Express) backend that uses MongoDB, which does the following:   
1. Allows user to create a Task and save it in MongoDB 
    1. No edit is needed for Tasks 
    2. Optional, user can delete a Task 
2. Allows user to create a Pipeline and save it in MongoDB
    1. We do not need a fancy UI, a list where all tasks are added / removed will do 
    2. No need to implement, but explain, how you will implement pagination for Tasks list when they are selected for inclusion in Pipeline
3. Allow user to calculate total average time of a Pipeline using Node.js to read Task.AverageTime data from MongoDB and show the result in UI 
    1. Users can recalculate total average time if Pipeline changes b. You may choose to trigger re-calculate explicitly, or as pipeline changes 
        1. How would handle an automatic update of this time in UI? 
4. Allow user to run the pipeline 
    1. Running the pipeline should trigger an external program from Node.js. 
        1. The time Pipeline run took should be stored in DB (PipelineRunTime) 
        2. The external program is written in C# i. Simplest implementation, program does nothing (Thread.Sleep(random)) 
        3. You may just read the task average time from DB in C# add them as return that results in output, to be printed in UI. iii. Use async / await. 
        4. Show “Pipeline (Name) finished” in UI, when pipeline is done

__Bonus Task (Data Processing)__ 
 
You are not required to implement this task, but you may think about it, or even provide code if you like (especially, if you want to work in our data processing part): 
 Assume, you have in DB a collection of how long each pipeline run took (​PipelineRunTime​). 
 We need to know the ​median​ of all times. 
 How would you solve this task in these two cases: 
 
1. If it is feasible to fetch all DB collection data in memory in Node.js/C# 
2. If not feasible to load all DB collection data in memory 
  
 __Other Questions (you may be asked)__
 No need to write code for these:
 1. What happens if pipeline has branches
    1. What if tasks are repeated?
    2. How would you model Tasks dependencies?
    3. What would be your time forecast for this task?
 3. How would you do the unit tests?
    1. Integration tests?
    2. CI & CD
 4. If you were to use a message-broker for backend, what would you choose, how it may
 work?
 5. What could be a good usage of Docker in our example task?
