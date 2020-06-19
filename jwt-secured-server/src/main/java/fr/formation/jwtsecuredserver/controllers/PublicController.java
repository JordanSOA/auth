package fr.formation.jwtsecuredserver.controllers;

import org.codehaus.jackson.map.util.JSONPObject;
import org.springframework.http.MediaType;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.formation.jwtsecuredserver.config.ResourceServerConfig;

import java.util.Collections;
import java.util.Map;

/**
 * @see ResourceServerConfig#configure(HttpSecurity)
 */

@RestController
@RequestMapping("/public")
public class PublicController {

    /**
     * Accessible for anyone even anonymous.
     *
     * @return "Hello anyone!"
     */
    @GetMapping(value = "/hello", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, String> hello() {
	return Collections.singletonMap("response","Hello anyone!");
    }
}
