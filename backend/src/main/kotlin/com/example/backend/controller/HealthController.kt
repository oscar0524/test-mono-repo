package com.example.backend.controller

import com.example.backend.model.HealthResponse
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/api")
class HealthController {
    
    @GetMapping("/health")
    fun health(): Mono<HealthResponse> {
        return Mono.just(HealthResponse(status = "OK", message = "Backend is running"))
    }
}
