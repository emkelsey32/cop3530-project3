import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

//import  *  as  data6  from  '../../../gundata_part6.json';
//import  *  as  data7  from  '../../../gundata_part7.json';
//import  *  as  data8  from  '../../../gundata_part8.json';
//import  *  as  data9  from  '../../../gundata_part9.json';
@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  set_of_guns: [number, number][];
  is_Mass: any;
  not_Mass: any;
  constructor(private httpClient: HttpClient) { 
    this.set_of_guns;
    this.is_Mass;
    this.not_Mass;
  }
//sets the setOfGuns variable
public set setOfGuns(x){
  this.set_of_guns = x;
}
//gets the setOfGuns variable
public get setOfGuns() {
  console.log("ye");
  return this.set_of_guns;
}
//gets the number of mass shootings
public get isMass(){
  return localStorage.getItem("isMass");
}
//gets the number of non-mass shootings
public get notMass(){
  return localStorage.getItem("notMass");
}
//stores the values of the map for mass shootings
  printValsMap(hash ,x){
    var notMass = hash.get("false");
    var mass = hash.get("true");
    
    console.log(notMass);
    console.log(mass);
    var y = performance.now(); //stops the time
      var z = y-x;
      var a = z.toString();
      console.log(a);
      localStorage.setItem('maptime', a);
  }
//collects the data for the mass shootings using a map
  massShootingMap(){
    var d = new Date();
    var x = performance.now();
    var isMass = 0;
    var notMass = 0;
    var HashMap = require('hashmap');
    var hash = new HashMap();
    hash.set("true", 0);
    hash.set("false", 0);
    this.httpClient.get("assets/gundata_part1.json").subscribe(data1 =>{
      for(let i = 0; i < 9225; i++){ //iterates through the data set and gets the data
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){ //flags it appropriately
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part2.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9225; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part3.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9200; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part4.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9163; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part5.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9132; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part6.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9132; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part7.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9253; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part8.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9384; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part9.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9360; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part11.json").subscribe(data1 =>{
      for(let i = 0; i < 9000; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part13.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9000; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part10.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9769; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    this.printValsMap(hash, x);
    })
   
  }
//stores the values of the mass shooting for the heap
  printVals(heap ,x){
    var notmass = 0;
    var Mass = 0;
    while(heap.top() == 0){//getting values for the two fields
      notmass++;
      heap.pop();
    }
    while(heap.top() == 1){
      Mass++;
      heap.pop();
    }
    console.log(notmass);
    console.log(Mass);
    this.is_Mass = Mass;
    this.not_Mass = notmass;
    var y = performance.now(); //stop time
      var z = y-x;
      var a = z.toString();
      console.log(a);
      localStorage.setItem('heaptime', a);
      localStorage.setItem('isMass', Mass.toString());
      localStorage.setItem('notMass', notmass.toString());
      localStorage.setItem("massPerc", (this.is_Mass/(this.is_Mass+this.not_Mass)*100).toString());
  }
//gets mass shooting data using the heap data structure
  massShootingHeap(){
    var d = new Date();
    var x = performance.now(); //start time
    var Heap = require('heap');
    var heap = new Heap();
    this.httpClient.get("assets/gundata_part1.json").subscribe(data1 =>{
      for(let i = 0; i < 9225; i++){ //get the data and store it in the heap
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          heap.push(1);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          heap.push(0);
        }
      }
    }
      
    })
    this.httpClient.get("assets/gundata_part2.json").subscribe(data2 =>{
      //console.log(data2); //9164
      for(let i = 0; i < 9225; i++){ 
        if(data2[i].n_killed != undefined){

        if(data2[i].n_killed > 2){
          heap.push(1);
        }else if(data2[i].n_killed > -1 && data2[i].n_killed < 3){
          heap.push(0);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part3.json").subscribe(data3 =>{
      //console.log(data3); //9200
      for(let i = 0; i < 9200; i++){ 
        if(data3[i].n_killed != undefined){
        if(data3[i].n_killed > 2){
          heap.push(1);
        }else if(data3[i].n_killed > -1 && data3[i].n_killed < 3){
          heap.push(0);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part4.json").subscribe(data4 =>{
      for(let i = 0; i < 9163; i++){ 
        if(data4[i].n_killed != undefined){

        if(data4[i].n_killed > 2){
          heap.push(1);
        }else if(data4[i].n_killed > -1 && data4[i].n_killed < 3){
          heap.push(0);
        }
      }
      }
    })
    this.httpClient.get("assets/gundata_part5.json").subscribe(data5 =>{
      for(let i = 0; i < 9132; i++){ 
        if(data5[i].n_killed != undefined){

        if(data5[i].n_killed > 2){
          heap.push(1);
        }else if(data5[i].n_killed > -1 && data5[i].n_killed < 3){
          heap.push(0);
        }
      }
      }
    })
    this.httpClient.get("assets/gundata_part6.json").subscribe(data6 =>{
      //console.log(data6);
      for(let i = 0; i < 9132; i++){ 
        if(data6[i].n_killed != undefined){
        if(data6[i].n_killed > 2){
          heap.push(1);
        }else if(data6[i].n_killed > -1 && data6[i].n_killed < 3){
          heap.push(0);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part7.json").subscribe(data7 =>{
      for(let i = 0; i < 9253; i++){ 
        if(data7[i].n_killed != undefined){
        if(data7[i].n_killed > 2){
          heap.push(1);
        }else if(data7[i].n_killed > -1 && data7[i].n_killed < 3){
          heap.push(0);
        }
      }
      }
    })
    this.httpClient.get("assets/gundata_part8.json").subscribe(data8 =>{
      for(let i = 0; i < 9384; i++){ 
        if(data8[i].n_killed != undefined){
        if(data8[i].n_killed > 2){
          heap.push(1);
        }else if(data8[i].n_killed > -1 && data8[i].n_killed < 3){
          heap.push(0);
        }
      }
      }
    })
    this.httpClient.get("assets/gundata_part9.json").subscribe(data9 =>{
      for(let i = 0; i < 9360; i++){ 
        if(data9[i].n_killed != undefined){

        if(data9[i].n_killed > 2){
          heap.push(1);
        }else if(data9[i].n_killed > -1 && data9[i].n_killed < 3){
          heap.push(0);
        }
      }
      }
    })
    this.httpClient.get("assets/gundata_part10.json").subscribe(data9 =>{
      for(let i = 0; i < 9000; i++){ 
        if(data9[i].n_killed != undefined){

        if(data9[i].n_killed > 2){
          heap.push(1);
        }else if(data9[i].n_killed > -1 && data9[i].n_killed < 3){
          heap.push(0);
        }
      }
      }
    })
    this.httpClient.get("assets/gundata_part13.json").subscribe(data9 =>{
      console.log("yea")
      for(let i = 0; i < 9000; i++){ 
        if(data9[i].n_killed != undefined){

        if(data9[i].n_killed > 2){
          heap.push(1);
        }else if(data9[i].n_killed > -1 && data9[i].n_killed < 3){
          heap.push(0);
        }
      }
      }
    })
    this.httpClient.get("assets/gundata_part11.json").subscribe(data10 =>{
      console.log("yee");
      for(let i = 0; i < 9000; i++){ 
        
        if(data10[i].n_killed != undefined){
        if(data10[i].n_killed > 2){
          heap.push(1);
        }else if(data10[i].n_killed > -1 && data10[i].n_killed < 3){
          heap.push(0);
        }
      }
      }
      
      this.printVals(heap, x);
    })
  }
//stores the values for the number of guns for the heap
  printValsWeapHeap(heap ,x){
     
      //go through and look for top three values and store in array as discussed previously
      type Pair<T,K> = [T,K];
      type Pairs<T,K> = Pair<T,K>[];
      var food: Pairs<number, number> = [,];
      
      var currentValue = heap.peek();
      var counter = 1;
      
      while(heap.size()>0){//pop each pair and store the values
        heap.pop();
        if(currentValue != heap.peek()){
          //assign curr val's counter to itself
          var apple: Pair<number, number> = [currentValue, counter];
          food.push(apple);
          
          currentValue = heap.peek();
          counter = 1;
          
        }else if(currentValue == heap.peek()){
          currentValue = heap.peek();
          counter++;
        }
      }
      console.log(food);
      var y = performance.now();
      var z = y-x;
      var a = z.toString();
      console.log(a);
      localStorage.setItem('heaptime', a);
      this.set_of_guns = food;
  }
//gets the number of guns using the heap data structure
  weapTypeHeap(){
    var d = new Date();
    var x = performance.now();//start time
    var Heap = require('heap');
    var heap = new Heap();
    this.httpClient.get("assets/gundata_part1.json").subscribe(data1 =>{
      for(let i = 0; i < 9225; i++){  //push back the number of guns
        if(data1[i].n_guns_involved != undefined){
          heap.push(data1[i].n_guns_involved);
        }
    }
      
    })
    this.httpClient.get("assets/gundata_part2.json").subscribe(data2 =>{
      //console.log(data2); //9164
      for(let i = 0; i < 9225; i++){ 
          if(data2[i].n_guns_involved != undefined){
            heap.push(data2[i].n_guns_involved);
          }
    }
    })
    this.httpClient.get("assets/gundata_part3.json").subscribe(data3 =>{
      //console.log(data3); //9200
      for(let i = 0; i < 9200; i++){ 
          if(data3[i].n_guns_involved != undefined){
            heap.push(data3[i].n_guns_involved);
          }
    }
    })
    this.httpClient.get("assets/gundata_part4.json").subscribe(data4 =>{
      for(let i = 0; i < 9163; i++){ 
          if(data4[i].n_guns_involved != undefined){
            heap.push(data4[i].n_guns_involved);
          }
      }
    })
    this.httpClient.get("assets/gundata_part5.json").subscribe(data5 =>{
      for(let i = 0; i < 9132; i++){ 
          if(data5[i].n_guns_involved != undefined){
            heap.push(data5[i].n_guns_involved);
          }
      }
    })
    this.httpClient.get("assets/gundata_part6.json").subscribe(data6 =>{
      //console.log(data6);
      for(let i = 0; i < 9132; i++){ 
          if(data6[i].n_guns_involved != undefined){
            heap.push(data6[i].n_guns_involved);
          }
    }
    })
    this.httpClient.get("assets/gundata_part7.json").subscribe(data7 =>{
      for(let i = 0; i < 9253; i++){ 
          if(data7[i].n_guns_involved != undefined){
            heap.push(data7[i].n_guns_involved);
          }
      }
    })
    this.httpClient.get("assets/gundata_part8.json").subscribe(data8 =>{
      for(let i = 0; i < 9384; i++){ 
          if(data8[i].n_guns_involved != undefined){
            heap.push(data8[i].n_guns_involved);
          }
      }
    })
    this.httpClient.get("assets/gundata_part9.json").subscribe(data9 =>{
      for(let i = 0; i < 9360; i++){ 
          if(data9[i].n_guns_involved != undefined){
            heap.push(data9[i].n_guns_involved);
          }
      }
    })
    this.httpClient.get("assets/gundata_part11.json").subscribe(data9 =>{
      for(let i = 0; i < 9000; i++){ 
          if(data9[i].n_guns_involved != undefined){
            heap.push(data9[i].n_guns_involved);
          }
      }
    })
    this.httpClient.get("assets/gundata_part13.json").subscribe(data9 =>{
      for(let i = 0; i < 9000; i++){ 
          if(data9[i].n_guns_involved != undefined){
            heap.push(data9[i].n_guns_involved);
          }
      }
    })
    this.httpClient.get("assets/gundata_part10.json").subscribe(data10 =>{
      for(let i = 0; i < 9769; i++){ 
          if(data10[i].n_guns_involved != undefined){
            heap.push(data10[i].n_guns_involved);
          }
      }
      
      this.printValsWeapHeap(heap, x);
    })
  }
//gets the number of guns usng the map data structure
  weapTypeMap(){
    var d = new Date();
    var x = performance.now();
    var HashMap = require('hashmap');
    var hash = new HashMap();
    this.httpClient.get("assets/gundata_part1.json").subscribe(data1 =>{
      for(let i = 0; i < 9225; i++){  //get the number of guns and store in the map
        if(hash.has(data1[i].n_guns_involved) == false){
          hash.set(data1[i].n_guns_involved, 1);
        }
        else if(hash.has(data1[i].n_guns_involved) == true){
          var currVal = hash.get(data1[i].n_guns_involved);
          hash.delete(data1[i].n_guns_involved);
          currVal = currVal + 1;
          hash.set(data1[i].n_guns_involved, currVal);
      }
    }
      
    })
    this.httpClient.get("assets/gundata_part2.json").subscribe(data =>{
      //console.log(data2); //9164
      for(let i = 0; i < 9225; i++){ 
        if(hash.has(data[i].n_guns_involved) == false){
          hash.set(data[i].n_guns_involved, 1);
        }
        else if(hash.has(data[i].n_guns_involved) == true){
          var currVal = hash.get(data[i].n_guns_involved);
          hash.delete(data[i].n_guns_involved);
          currVal = currVal + 1;
          hash.set(data[i].n_guns_involved, currVal);
      }
    }
    })
    this.httpClient.get("assets/gundata_part3.json").subscribe(data =>{
      //console.log(data3); //9200
      for(let i = 0; i < 9200; i++){ 
        if(hash.has(data[i].n_guns_involved) == false){
          hash.set(data[i].n_guns_involved, 1);
        }
        else if(hash.has(data[i].n_guns_involved) == true){
          var currVal = hash.get(data[i].n_guns_involved);
          hash.delete(data[i].n_guns_involved);
          currVal = currVal + 1;
          hash.set(data[i].n_guns_involved, currVal);
      }
    }
    })
    this.httpClient.get("assets/gundata_part4.json").subscribe(data =>{
      for(let i = 0; i < 9163; i++){ 
        if(hash.has(data[i].n_guns_involved) == false){
          hash.set(data[i].n_guns_involved, 1);
        }
        else if(hash.has(data[i].n_guns_involved) == true){
          var currVal = hash.get(data[i].n_guns_involved);
          hash.delete(data[i].n_guns_involved);
          currVal = currVal + 1;
          hash.set(data[i].n_guns_involved, currVal);
      }
    }
    })
    this.httpClient.get("assets/gundata_part5.json").subscribe(data =>{
      for(let i = 0; i < 9132; i++){ 
        if(hash.has(data[i].n_guns_involved) == false){
          hash.set(data[i].n_guns_involved, 1);
        }
        else if(hash.has(data[i].n_guns_involved) == true){
          var currVal = hash.get(data[i].n_guns_involved);
          hash.delete(data[i].n_guns_involved);
          currVal = currVal + 1;
          hash.set(data[i].n_guns_involved, currVal);
      }
    }
    })
    this.httpClient.get("assets/gundata_part6.json").subscribe(data =>{
      //console.log(data6);
      for(let i = 0; i < 9132; i++){ 
        if(hash.has(data[i].n_guns_involved) == false){
          hash.set(data[i].n_guns_involved, 1);
        }
        else if(hash.has(data[i].n_guns_involved) == true){
          var currVal = hash.get(data[i].n_guns_involved);
          hash.delete(data[i].n_guns_involved);
          currVal = currVal + 1;
          hash.set(data[i].n_guns_involved, currVal);
      }
    }
    })
    this.httpClient.get("assets/gundata_part7.json").subscribe(data =>{
      for(let i = 0; i < 9253; i++){ 
        if(hash.has(data[i].n_guns_involved) == false){
          hash.set(data[i].n_guns_involved, 1);
        }
        else if(hash.has(data[i].n_guns_involved) == true){
          var currVal = hash.get(data[i].n_guns_involved);
          hash.delete(data[i].n_guns_involved);
          currVal = currVal + 1;
          hash.set(data[i].n_guns_involved, currVal);
      }
    }
    })
    this.httpClient.get("assets/gundata_part8.json").subscribe(data =>{
      for(let i = 0; i < 9384; i++){ 
        if(hash.has(data[i].n_guns_involved) == false){
          hash.set(data[i].n_guns_involved, 1);
        }
        else if(hash.has(data[i].n_guns_involved) == true){
          var currVal = hash.get(data[i].n_guns_involved);
          hash.delete(data[i].n_guns_involved);
          currVal = currVal + 1;
          hash.set(data[i].n_guns_involved, currVal);
      }
    }
    })
    this.httpClient.get("assets/gundata_part9.json").subscribe(data =>{
      for(let i = 0; i < 9360; i++){ 
        if(hash.has(data[i].n_guns_involved) == false){
          hash.set(data[i].n_guns_involved, 1);
        }
        else if(hash.has(data[i].n_guns_involved) == true){
          var currVal = hash.get(data[i].n_guns_involved);
          hash.delete(data[i].n_guns_involved);
          currVal = currVal + 1;
          hash.set(data[i].n_guns_involved, currVal);
      }
    }
    })
    this.httpClient.get("assets/gundata_part11.json").subscribe(data =>{
      for(let i = 0; i < 9000; i++){ 
        if(hash.has(data[i].n_guns_involved) == false){
          hash.set(data[i].n_guns_involved, 1);
        }
        else if(hash.has(data[i].n_guns_involved) == true){
          var currVal = hash.get(data[i].n_guns_involved);
          hash.delete(data[i].n_guns_involved);
          currVal = currVal + 1;
          hash.set(data[i].n_guns_involved, currVal);
      }
    }
    })
    this.httpClient.get("assets/gundata_part13.json").subscribe(data =>{
      for(let i = 0; i < 9000; i++){ 
        if(hash.has(data[i].n_guns_involved) == false){
          hash.set(data[i].n_guns_involved, 1);
        }
        else if(hash.has(data[i].n_guns_involved) == true){
          var currVal = hash.get(data[i].n_guns_involved);
          hash.delete(data[i].n_guns_involved);
          currVal = currVal + 1;
          hash.set(data[i].n_guns_involved, currVal);
      }
    }
    })
    this.httpClient.get("assets/gundata_part10.json").subscribe(data =>{
      for(let i = 0; i < 9769; i++){ 
        if(hash.has(data[i].n_guns_involved) == false){
          hash.set(data[i].n_guns_involved, 1);
        }
        else if(hash.has(data[i].n_guns_involved) == true){
          var currVal = hash.get(data[i].n_guns_involved);
          hash.delete(data[i].n_guns_involved);
          currVal = currVal + 1;
          hash.set(data[i].n_guns_involved, currVal);
      }
    }
    this.printGunMap(hash, x);
    })
  }
//stores the number of guns from the map data structure
  printGunMap(hash, x){
    type Pair<T,K> = [T,K];
      type Pairs<T,K> = Pair<T,K>[];
      var mapPairs: Pairs<number, number> = [,];
      var i = 1;
      while(hash.has(i) && i < 30){ //organize data into pairs
        if(hash.has(i)){
          //assign curr val's counter to itself
          var apple: Pair<number, number> = [i, hash.get(i)];
          mapPairs.push(apple);        
          i++;
          
        }else{
          i++;
        }
      }

    var y = performance.now();
    var z = y-x;
    var a = z.toString();
    console.log(a);
    localStorage.setItem('maptime', a);
  }
//gets the data and sorts by state using a heap
  stateHeap(){
    var d = new Date();
    var x = performance.now(); //start time
    var Heap = require('heap');
    var heap = new Heap();
    this.httpClient.get("assets/gundata_part1.json").subscribe(data1 =>{
      for(let i = 0; i < 9225; i++){  //push the state into the heap
        if(data1[i].state != undefined){
          heap.push(data1[i].state);
        }
    }
      
    })
    this.httpClient.get("assets/gundata_part2.json").subscribe(data2 =>{
      //console.log(data2); //9164
      for(let i = 0; i < 9225; i++){ 
          if(data2[i].state != undefined){
            heap.push(data2[i].state);
          }
    }
    })
    this.httpClient.get("assets/gundata_part3.json").subscribe(data3 =>{
      //console.log(data3); //9200
      for(let i = 0; i < 9200; i++){ 
          if(data3[i].state != undefined){
            heap.push(data3[i].state);
          }
    }
    })
    this.httpClient.get("assets/gundata_part4.json").subscribe(data4 =>{
      for(let i = 0; i < 9163; i++){ 
          if(data4[i].state != undefined){
            heap.push(data4[i].state);
          }
      }
    })
    this.httpClient.get("assets/gundata_part5.json").subscribe(data5 =>{
      for(let i = 0; i < 9132; i++){ 
          if(data5[i].state != undefined){
            heap.push(data5[i].state);
          }
      }
    })
    this.httpClient.get("assets/gundata_part6.json").subscribe(data6 =>{
      //console.log(data6);
      for(let i = 0; i < 9132; i++){ 
          if(data6[i].state != undefined){
            heap.push(data6[i].state);
          }
    }
    })
    this.httpClient.get("assets/gundata_part7.json").subscribe(data7 =>{
      for(let i = 0; i < 9253; i++){ 
          if(data7[i].state != undefined){
            heap.push(data7[i].state);
          }
      }
    })
    this.httpClient.get("assets/gundata_part8.json").subscribe(data8 =>{
      for(let i = 0; i < 9384; i++){ 
          if(data8[i].state != undefined){
            heap.push(data8[i].state);
          }
      }
    })
    this.httpClient.get("assets/gundata_part9.json").subscribe(data9 =>{
      for(let i = 0; i < 9360; i++){ 
          if(data9[i].state != undefined){
            heap.push(data9[i].state);
          }
      }
    })
    this.httpClient.get("assets/gundata_part11.json").subscribe(data9 =>{
      for(let i = 0; i < 9000; i++){ 
          if(data9[i].state != undefined){
            heap.push(data9[i].state);
          }
      }
    })
    this.httpClient.get("assets/gundata_part13.json").subscribe(data9 =>{
      for(let i = 0; i < 9000; i++){ 
          if(data9[i].state != undefined){
            heap.push(data9[i].state);
          }
      }
    })
    this.httpClient.get("assets/gundata_part10.json").subscribe(data10 =>{
      for(let i = 0; i < 9769; i++){ 
          if(data10[i].state != undefined){
            heap.push(data10[i].state);
          }
      }
      
      this.printValsStateHeap(heap, x);
    })
  }
//stores the data for the state incidents using a map
  printStateMap(hash ,x){
    var stateToFind = localStorage.getItem("state"); //get the state
    var numIns = hash.get(stateToFind); //find in map
    console.log(numIns);
    
    var y = performance.now();
      var z = y-x;
      var a = z.toString();
      console.log(a);
      localStorage.setItem('maptime', a);
  }
//gets the data for the state incidents using heap
  stateMap(){
    //var d = new Date();
    var x = performance.now();//start time
    var HashMap = require('hashmap');
    var hash = new HashMap();

    this.httpClient.get("assets/gundata_part1.json").subscribe(data1 =>{
      for(let i = 0; i < 9225; i++){//get the state value and store the counter or increment by 1 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part2.json").subscribe(data1 =>{
      for(let i = 0; i < 9225; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part3.json").subscribe(data1 =>{
      for(let i = 0; i < 9200; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part4.json").subscribe(data1 =>{
      for(let i = 0; i < 9163; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part5.json").subscribe(data1 =>{
      for(let i = 0; i < 9132; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part6.json").subscribe(data1 =>{
      for(let i = 0; i < 9132; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part7.json").subscribe(data1 =>{
      for(let i = 0; i < 9253; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part8.json").subscribe(data1 =>{
      for(let i = 0; i < 9384; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part9.json").subscribe(data1 =>{
      for(let i = 0; i < 9000; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part11.json").subscribe(data1 =>{
      for(let i = 0; i < 9000; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part13.json").subscribe(data1 =>{
      for(let i = 0; i < 9000; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part10.json").subscribe(data1 =>{
      for(let i = 0; i < 9769; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
      this.printStateMap(hash, x);
    })

  }
//stores the data for state incidents using a heap
  printValsStateHeap(heap, x){
    var stateFound = false;
    var totalCases = 0;
    var numInstances = 0;
    var stateToFind = localStorage.getItem("state"); //get the state desired and count the number of indidents in the heap
    while(heap.size() > 0){
      if(heap.top() == stateToFind){
        numInstances++;
      }
      heap.pop();
      totalCases++;
    }
    localStorage.setItem("numInstance", numInstances.toString());
    var percentageOfInc = (numInstances / totalCases) * 100;
    localStorage.setItem("percentage", percentageOfInc.toString());
    localStorage.setItem("totalCases", totalCases.toString())

  }
}
