"use client";
import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Home/ManageHeader";
import "/styles/manage-subs.css"; // Assuming your CSS file path

const Page = () => {
    return (
        <div className="main-sub">
            <Header />
            <div className="outer">
                <div className="info-header">
                    <h3>Subscription Details</h3>
                    <Link href="/billing-portal" className="link-tag">
                        Manage Billing Info
                    </Link>
                </div>

                <div className="inner">
                    <div className="section">
                        <p>Current Plan:</p>
                        <p className="btn">Cancelled</p>
                    </div>

                    <div className="section">
                        <p>Subscription Status:</p>
                        <p className="btn">Not Active</p>
                    </div>

                    <div className="section">
                        <p className="credit-header">Credit Usage</p>
                        <div className="credit-info">
                            <p>You currently do not have an active plan.</p>
                            <p>Unused credits will expire in 0 Days</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="second-main">
                <div className="heading">Need More Credits?</div>
                <p>
                    Out of VSL edits? No worries! Add more edits to your account
                    instantly. Choose the number of extra edits you need, with a
                    minimum of 5, and keep creating high-converting VSLs without
                    delays.
                </p>
            </div>

            <div className="credit-box">
                <div className="box-cont">
                    <form action="/accounts/add-credits" method="post">
                        <input
                            type="hidden"
                            name="csrfmiddlewaretoken"
                            value="mNbLsZYgy2vFsKoCYpjP3ZGUcyHtjqhMbeFwzO2zZEm8DUNnaE3DZnkllJVq6pIT"
                        />
                        <p className="cr">Buy More Credits</p>
                        <p>$0.00 Each</p>
                        <input
                            type="number"
                            min="1"
                            name="credits_number"
                            id="credit"
                            required
                            placeholder="Enter the amount of credits"
                        />
                        <button type="submit" disabled>
                            Buy
                        </button>
                    </form>
                </div>
            </div>

            <div className="main-head">
                <h1>Plans that scale with your business</h1>
            </div>

            <div className="plans">
                <div className="box">
                    <p className="box-head">Growth Plan</p>
                    <p id="p">
                        Perfect for scaling your video advertising campaigns
                    </p>
                    <br />
                    <div className="price">
                        <h1>$497.00</h1>
                        <span>/Month</span>
                    </div>
                    <p id="p">Just $19.88 per VSL</p>
                    <p id="p" style={{ minHeight: "70px" }}>
                        <img
                            src="/images/check.svg"
                            alt="Check icon"
                            className="check-icon"
                        />{" "}
                        Create up to 25 VSLs per month
                    </p>
                    <Link href="/accounts/" className="link-tag">
                        Upgrade Subscription
                    </Link>
                </div>

                <div className="box">
                    <p className="box-head">Pro Plan</p>
                    <p id="p">Ideal for high-volume marketers and agencies</p>
                    <br />
                    <div className="price">
                        <h1>$997.00</h1>
                        <span>/Month</span>
                    </div>
                    <p id="p">Just $16.62 per VSL</p>
                    <p id="p" style={{ minHeight: "70px" }}>
                        <img
                            src="/images/check.svg"
                            alt="Check icon"
                            className="check-icon"
                        />{" "}
                        Create up to 60 VSLs per month
                    </p>
                    <Link href="/accounts/" className="link-tag">
                        Upgrade Subscription
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;
