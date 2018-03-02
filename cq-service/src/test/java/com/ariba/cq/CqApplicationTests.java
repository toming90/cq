package com.ariba.cq;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static jdk.nashorn.internal.objects.Global.print;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CqApplicationTests {

	@Ignore
	@Test
	public void contextLoads() {
		print("hello world");
	}

}
