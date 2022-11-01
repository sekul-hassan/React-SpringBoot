package com.example.backendapplication.Controller;

import com.example.backendapplication.Model.User;
import com.example.backendapplication.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }
    @GetMapping("/getuser")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/getuser/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(null);
    }
    @PutMapping("/getuser/{id}")
    User userUpdate(@RequestBody User newUser,@PathVariable Long id){
        return userRepository.findById(id)
                .map(x->{
                    x.setEmail(newUser.getEmail());
                    x.setFname(newUser.getFname());
                    x.setLname(newUser.getLname());
                    return userRepository.save(x);
                }).orElseThrow(null);
    }
    @DeleteMapping("/getuser/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            return "User Not Found";
        }
        userRepository.deleteById(id);
        return "Deleted";
    }

}
