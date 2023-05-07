package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bank")
@CrossOrigin(origins= {"http://localhost:3000"})
public class BankController {
	
	@Autowired
	BankRepository bankRepository;

	@GetMapping("/all")
	public List<Bank> getAllBanks(){
		return (List<Bank>) bankRepository.findAll();
	}
	
	@GetMapping("/getbyid/{id}")
	public Bank getBankById(@PathVariable Integer id) {
		return bankRepository.findById(id).get();
	}
	
	@DeleteMapping("/deletebyid")
	public String deleteBankById(@RequestParam Integer id) {
		bankRepository.deleteById(id);
		return "bank deleted successfully";
	}
	
	@PostMapping("/savebank")
	public Bank saveBank(@RequestBody Bank bank) {
		bankRepository.save(bank);
		return bank;
	}
	
}
