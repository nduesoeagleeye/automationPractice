package runner;

import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

public class NGTestListener implements ITestListener {


    @Override
    public void onTestStart(ITestResult iTestResult) {
        System.out.print("On test Start");

    }

    @Override
    public void onTestSuccess(ITestResult iTestResult) {
        System.out.print("On test Success");


    }

    @Override
    public void onTestFailure(ITestResult iTestResult) {
        System.out.print("On test Failure");


    }

    @Override
    public void onTestSkipped(ITestResult iTestResult) {
        System.out.print("On test Skipped");

    }

    @Override
    public void onTestFailedButWithinSuccessPercentage(ITestResult iTestResult) {
        System.out.print("On test percentage");


    }

    @Override
    public void onStart(ITestContext iTestContext) {
        System.out.print("On Start");


    }

    @Override
    public void onFinish(ITestContext iTestContext) {
        System.out.print("On Finish");

    }
}
